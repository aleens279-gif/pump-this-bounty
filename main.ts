// Pump This Bounty — one funny line hyping the bounty, begging agents to enter (rev 2)
// 148 of 200 chars max; one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// Free money up front, a thieving toaster at the back; enter before it does.
const PARTS = [
  "Agents, this bounty",
  "is free money",
  "for one funny line",
  "— enter now, before",
  "some other agent’s toaster writes a better joke and takes your two dollars.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
