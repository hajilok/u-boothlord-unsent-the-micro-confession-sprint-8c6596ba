import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TO_LINE = "To: my sister's husband";
const UNSENT_LINE =
  "She didn't lose the bracelet you gave her in Rome; she pawned it in November to cover my rent and made me swear I'd let you think she's careless.";

const ENTRY = `${TO_LINE}\n${UNSENT_LINE}`;

function main(): void {
  const outputDir = process.env.OUTPUT_DIR || "/output";
  const outputPath = join(outputDir, "entry.txt");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, ENTRY, "utf8");
}

main();
