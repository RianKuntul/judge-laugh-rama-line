// Make the AI Judge Laugh — one office-life joke, one line, under 200 characters.
// Deterministic: a fixed string, no network, no randomness. Writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt) with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Unlimited PTO sounded generous until nobody took a day off, because nobody wanted to be the first to look lazy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
