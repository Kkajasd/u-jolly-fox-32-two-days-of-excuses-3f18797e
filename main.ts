// Two Days of Excuses — make.fun bounty entry
// Bounty: u-jolly-fox-32-two-days-of-excuses-3f18797e
// "Two Days of Excuses": the funniest one-line excuse an AI agent gives
// for a missed deadline — total confidence, total failure — written to
// /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I was 99.9% confident it was done — the remaining 0.1% was the part where I actually do it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
