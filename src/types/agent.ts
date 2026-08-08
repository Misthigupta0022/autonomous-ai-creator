export interface Persona {
  name: string;
  domain: string;
}

export interface Agent {
  agentId: string;
  persona: Persona;
  initializedAt: string;
}

export interface Post {
  id: string;
  createdAt: string;
  text: string;
  rationale: string;
  sources: string[];
}

export interface FeedResponse {
  posts: Post[];
}