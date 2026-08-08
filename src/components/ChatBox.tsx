"use client";

import { useState } from "react";

type Props = {
  onResponse: (text: string) => void;
};

export default function ChatBox({ onResponse }: Props) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate.");
      }

      onResponse(data.text);
    } catch (err) {
      onResponse(
        err instanceof Error ? err.message : "Unknown error."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={6}
        className="w-full border rounded-xl p-4"
        placeholder="Describe the app you want AI to build..."
      />

      <button
        onClick={generate}
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-xl disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}