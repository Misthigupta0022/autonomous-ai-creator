import { NextRequest, NextResponse } from "next/server";

import { getAgent, getPosts } from "@/lib/memory";
import { publishNextTopic } from "@/lib/publisher";

let lastPublishTime = 0;
const PUBLISH_INTERVAL = 5 * 60 * 1000; // 5 minutes

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const agentId = searchParams.get("agentId");

    if (!agentId) {
      return NextResponse.json(
        { error: "agentId is required" },
        { status: 400 }
      );
    }

    const agent = getAgent();

console.log("Saved Agent:", agent);
console.log("Received AgentId:", agentId);

    if (!agent || agent.agentId !== agentId) {
      return NextResponse.json(
        { error: "Invalid agentId" },
        { status: 404 }
      );
    }

    const now = Date.now();

    if (now - lastPublishTime > PUBLISH_INTERVAL) {
      await publishNextTopic();
      lastPublishTime = now;
    }

    return NextResponse.json({
      posts: getPosts(),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}