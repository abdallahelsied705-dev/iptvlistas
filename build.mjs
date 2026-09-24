import { execFileSync } from "node:child_process";

// Compatibility entry point for hosts that still call `node build.mjs`.
// The application source is authoritative; this script must never rewrite it.
execFileSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "build"],
  { stdio: "inherit" },
);
