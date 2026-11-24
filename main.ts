import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Status report: fourteen of fifteen services green, one service emotionally unavailable, and the database has been temporarily inconsistent since the launch party.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY_TEXT, "utf8");
console.log("wrote " + target + ": " + ENTRY_TEXT.length + " chars");
