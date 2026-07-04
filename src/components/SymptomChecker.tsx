import { useState, useRef, useEffect } from "react";
import { analyzeSymptoms, type TriageResult } from "../lib/symptomEngine";
import ResultCard from "./ResultCard";

interface Message {
  role: "user" | "bot";
  text?: string;
  result?: TriageResult;
}

const EXAMPLES = [
  "fever, headache, chills",
  "sore throat and runny nose",
  "chest pain and difficulty breathing",
  "severe headache and dizziness",
];

export default function SymptomChecker() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi, I'm your SmartCare assistant 👋 Describe your symptoms and I'll assess how urgent they may be. For example: \"fever, headache, and chills\".",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setThinking(true);

    setTimeout(() => {
      const result = analyzeSymptoms(trimmed);
      setMessages((m) => [...m, { role: "bot", result }]);
      setThinking(false);
    }, 900);
  }

  return (
    <section id="checker" className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
      <div className="mb-8 text-center">
        <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
          AI Symptom Checker
        </span>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Tell us how you're feeling
        </h2>
        <p className="mt-2 text-slate-500">
          Get an instant first-opinion assessment. Not a substitute for professional medical advice.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg">
            🩺
          </div>
          <div>
            <p className="text-sm font-semibold text-white">SmartCare Assistant</p>
            <p className="flex items-center gap-1.5 text-xs text-teal-100">
              <span className="h-2 w-2 rounded-full bg-green-300" /> Online • Instant response
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[420px] space-y-4 overflow-y-auto bg-slate-50/50 p-4 sm:p-6">
          {messages.map((msg, i) => (
            <div key={i}>
              {msg.text && (
                <div
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-sm bg-teal-600 text-white"
                        : "rounded-bl-sm bg-white text-slate-700 shadow-sm ring-1 ring-slate-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              )}
              {msg.result && <ResultCard result={msg.result} />}
            </div>
          ))}

          {thinking && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-teal-400 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-teal-400 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-teal-400" />
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Quick examples */}
        <div className="flex flex-wrap gap-2 border-t border-slate-100 bg-white px-4 pt-3">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              onClick={() => send(ex)}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
            >
              {ex}
            </button>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-slate-100 bg-white p-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptoms..."
            className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
          />
          <button
            type="submit"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white transition hover:bg-teal-700 active:scale-95"
            aria-label="Send"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4Z" />
            </svg>
          </button>
        </form>
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">
        ⚕️ SmartCare provides general guidance only and is not a medical diagnosis. In an emergency, call your local emergency number.
      </p>
    </section>
  );
}


