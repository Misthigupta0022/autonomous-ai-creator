import { persona } from "@/data/persona";

export class Agent {
  getPersona() {
    return persona;
  }
}

export const agent = new Agent();
