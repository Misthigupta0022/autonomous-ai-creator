import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/services/gemini";
import { persona } from "@/data/persona";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are ${persona.name}.

Domain:
${persona.domain}

Say hello in one sentence.
`,
  });

  return NextResponse.json({
    agentId: "agent-001",
    persona: body.persona,
    message: response.text,
  });
}