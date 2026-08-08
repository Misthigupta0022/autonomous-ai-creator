"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [agentId, setAgentId] = useState("");

  async function initAgent() {
    const res = await fetch("/api/agent/init", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        persona: {
          name: "Ada",
          domain: "AI Security",
        },
      }),
    });

    const data = await res.json();

    setAgentId(data.agentId);
    setResult(JSON.stringify(data, null, 2));
  }

  async function getFeed() {
    if (!agentId) {
      alert("Click Initialize Agent first.");
      return;
    }

    const res = await fetch(`/api/agent/feed?agentId=${agentId}`);

    const data = await res.json();

    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <main className="p-10 space-y-4">
      <h1 className="text-4xl font-bold">Autonomous AI Creator</h1>

      <button
        onClick={initAgent}
        className="bg-blue-600 text-white px-5 py-3 rounded"
      >
        Initialize Agent
      </button>

      <button
        onClick={getFeed}
        className="ml-4 bg-green-600 text-white px-5 py-3 rounded"
      >
        Get Feed
      </button>

      <pre className="mt-8 bg-gray-100 p-5 rounded whitespace-pre-wrap">
        {result}
      </pre>
    </main>
  );
}