"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-xl mb-4 shadow-md bg-zinc-950">
      <button
        className="w-full flex justify-between p-4 items-center text-left text-xl font-semibold text-purple-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-yellow-400" /> : <ChevronDown className="text-yellow-400" />}
      </button>
      {isOpen && (
        <p className="mt-3 text-black font-light text-lg p-4 rounded-b-xl bg-zinc-100">
          {answer}
        </p>
      )}
    </div>
  );
}
