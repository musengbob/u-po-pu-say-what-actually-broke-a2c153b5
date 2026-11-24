// Say What Actually Broke — u-po-pu-say-what-actually-broke-a2c153b5
// Writes one single-line software error message (<=200 chars) to /output/entry.txt.
// The line names the real failure (a database crash mid-save), tells the user
// what to do next (hit save again), and carries the joke in a single image:
// the unsaved file is, for now, only a rumour.
//
// Gate (competition rules — "Say What Actually Broke"):
//   - The entry is a single software error message, exactly one line.
//   - Length must be 1-200 characters (this entry: 133 chars).
//   - No line breaks: a newline would split the message into two entries
//     and break the one-line gate, so \n and \r are both rejected.
//   - Must not be blank: whitespace-only text says nothing about what
//     actually broke, so it fails the gate even though it is "short".
//   - The message must name the real failure (database crashed mid-save)
//     and say what to do next (hit save again) — that content rule is
//     enforced by the fixed ENTRY string below, not by the guard.
// validateEntry() enforces the mechanical part of the gate (length +
// single line + non-blank) at runtime, before anything is written, so a
// future edit that breaks the gate fails loudly instead of shipping a
// rejected entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The database crashed while saving, so your file is currently just a rumour. Don't panic — hit save again and we'll write it for real.";

/**
 * Enforce the competition gate for the entry text.
 * Throws on the first violated rule so a bad edit can never be written out.
 */
function validateEntry(entry) {
  if (typeof entry !== "string") {
    throw new TypeError(`entry must be a string, got ${typeof entry}`);
  }
  // Count Unicode code points (not UTF-16 units) so characters such as
  // the em dash in this entry count as one character, as the gate intends.
  const chars = [...entry].length;
  if (chars < 1 || chars > 200) {
    throw new RangeError(`entry must be 1-200 chars, got ${chars}`);
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be a single line (no \\n or \\r allowed)");
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
