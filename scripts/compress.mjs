import sharp from "sharp"
import { readdirSync, mkdirSync, existsSync, statSync } from "fs"
import { join, parse } from "path"

const input = "raw"
const output = "src/lib/assets/art"
const maxWidth = 1600

const quality = 80

if (!existsSync(output)) {
  mkdirSync(output, { recursive: true })
}

const files = readdirSync(input)

if (files.length === 0) {
  console.log("No images found")
  process.exit(0)
}

for (const file of files) {
  const { name } = parse(file)
  const inputPath = join(input, file)
  const outputPath = join(output, `${name}.webp`)

  const before = statSync(inputPath).size
  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath)
  const after = statSync(outputPath).size

  const reduction = (100 - (after / before) * 100).toFixed(1)

  console.log(
    `reduced ${name}.webp ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024).toFixed(0)}KB  (-${reduction}%)`,
  )
}
