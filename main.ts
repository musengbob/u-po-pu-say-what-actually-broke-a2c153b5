// Say What Actually Broke — u-po-pu-say-what-actually-broke-a2c153b5
// Writes one single-line software error message (<=200 chars) to /output/entry.txt.
// The line names the real failure (a database crash mid-save), tells the user
// what to do next (hit save again), and carries the joke in a single image:
// the unsaved file is, for now, only a rumour.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The database crashed while saving, so your file is currently just a rumour. Don't panic — hit save again and we'll write it for real.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
