import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, "public", "images");
const outputPath = path.join(__dirname, "src", "data", "images.ts");

// Перевіряємо чи директорія існує
if (!fs.existsSync(baseDir)) {
  console.error("❌ public/images не існує!");
  process.exit(1);
}

const isImage = (file) => /\.(jpe?g|png|gif|webp|svg)$/i.test(file);

const folders = fs
  .readdirSync(baseDir)
  .filter((item) => fs.statSync(path.join(baseDir, item)).isDirectory());

const imageExports = folders.map((folder) => {
  const files = fs
    .readdirSync(path.join(baseDir, folder))
    .filter(isImage)
    .map((file) => `"${`/images/${folder}/${file}`}"`);

  const varName = `${folder.replace(/[^a-zA-Z0-9]/g, "")}Images`;

  return `export const ${varName} = [\n  ${files.join(",\n  ")}\n];`;
});

const result = `// ⚠️ Auto-generated file. Do not edit manually.\n\n${imageExports.join(
  "\n\n"
)}\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, result, "utf-8");

console.log("✅ Зображення згенеровані в:", outputPath);
