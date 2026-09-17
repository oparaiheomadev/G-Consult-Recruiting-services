import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const IN = 'src/assets';
const OUT = 'src/assets/optimised';

await mkdir(OUT, { recursive: true });

const files = await readdir(IN);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!['.webp', '.jpeg', '.png'].includes(ext)) continue;
  if (file.startsWith('gconsult')) continue; // leave the logos alone

  const name = path.basename(file, ext);

  await sharp(path.join(IN, file))
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(OUT, `${name}.webp`));

  console.log('done:', name);
}
