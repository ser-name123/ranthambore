// Builds the favicon set and the social share image from the logo.
// Usage: node scripts/make-icons.mjs [logo=public/logo.jpg]
// Writes: src/app/favicon.ico, public/icon-192.png, public/icon-512.png,
//         public/apple-touch-icon.png, public/og-share.jpg
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const logo = process.argv[2] || 'public/logo.jpg';
// Square around the tiger's face in the 1024×1024 logo (the full logo with text is unreadable at 16 px).
const FACE = { left: 395, top: 120, width: 320, height: 320 };

const face = (size, pad = 0) =>
  sharp(logo)
    .extract(FACE)
    .resize(size - pad * 2, size - pad * 2)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png({ compressionLevel: 9, palette: size > 64 })
    .toBuffer();

/** ICO file whose images are embedded PNGs (supported by every current browser). */
function ico(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const dir = Buffer.alloc(16 * pngs.length);
  let offset = 6 + dir.length;
  pngs.forEach(({ size, data }, i) => {
    const o = i * 16;
    dir.writeUInt8(size >= 256 ? 0 : size, o);
    dir.writeUInt8(size >= 256 ? 0 : size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += data.length;
  });
  return Buffer.concat([header, dir, ...pngs.map((p) => p.data)]);
}

const sizes = [16, 32, 48];
// ICO entries must be 32-bit RGBA PNGs (Turbopack and Windows reject RGB/palette ones).
const icoImages = await Promise.all(
  sizes.map(async (size) => ({ size, data: await sharp(await face(size)).ensureAlpha().png({ compressionLevel: 9, palette: false }).toBuffer() }))
);
writeFileSync('src/app/favicon.ico', ico(icoImages));
writeFileSync('public/icon-192.png', await face(192));
writeFileSync('public/icon-512.png', await face(512));
writeFileSync('public/apple-touch-icon.png', await face(180, 12));

// 1200×630 share image (WhatsApp, Facebook, LinkedIn): the full logo on white, kept small so WhatsApp shows it.
const logoFit = await sharp(logo).resize(600, 600, { fit: 'contain', background: '#ffffff' }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
  .composite([{ input: logoFit, left: 300, top: 15 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og-share.jpg');

console.log('Icons and share image written.');
