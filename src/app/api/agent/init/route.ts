import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

import { saveAgent } from "@/lib/memory";
import { Agent } from "@/types/agent";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.persona?.name || !body.persona?.domain) {
      return NextResponse.json(
        {
          error: "persona.name and persona.domain are required",
        },
        {
          status: 400,
        }
      );
    }

    const agent: Agent = {
      agentId: randomUUID(),
      persona: {
        name: body.persona.name,
        domain: body.persona.domain,
      },
      initializedAt: new Date().toISOString(),
    };

    saveAgent(agent);

    return NextResponse.json({
      agentId: agent.agentId,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Initialization failed",
      },
      {
        status: 500,
      }
    );
  }
}