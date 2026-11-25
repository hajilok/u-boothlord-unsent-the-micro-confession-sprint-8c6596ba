import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TO_LINE = "To: my neighbor in 3B";
const UNSENT_LINE =
  "The night the paramedics took your husband, I watched through the peephole with my coat on until the elevator doors closed.";

function buildEntry(): string {
  if (!TO_LINE.startsWith("To: ") || TO_LINE.includes("\n")) {
    throw new Error("Invalid To: line");
  }
  if (UNSENT_LINE.includes("\n") || [...UNSENT_LINE].length > 200) {
    throw new Error("Unsent message must be a single line of at most 200 characters");
  }
  const entry = `${TO_LINE}\n${UNSENT_LINE}`;
  const totalChars = [...entry].length;
  if (totalChars < 1 || totalChars > 260) {
    throw new Error(`Entry length ${totalChars} outside gate cap 1..260`);
  }
  return entry;
}

function main(): void {
  const outputDir = process.env.OUTPUT_DIR || "/output";
  const outputPath = join(outputDir, "entry.txt");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, buildEntry(), "utf8");
}

main();
