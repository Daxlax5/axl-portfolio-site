import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site } from '../data/site';

// Open Graph card, rendered once at build time. Same typeface and light-mode
// tokens as the page: white background, ink text, muted secondary line, 1px divider.
const WIDTH = 1200;
const HEIGHT = 630;
const INK = '#1f2a33';
const MUTED = '#5f6b76';
const LINE = '#e6e9ec';
const BG = '#ffffff';

// Satori needs static TTF/OTF/WOFF files, so the OG card uses the static cuts of
// Instrument Sans rather than the variable woff2 the page itself loads.
const require = createRequire(import.meta.url);
const font = (weight: 400 | 500 | 600) =>
  readFile(require.resolve(`@fontsource/instrument-sans/files/instrument-sans-latin-${weight}-normal.woff`));

const el = (type: string, style: Record<string, string | number>, children: unknown) => ({
  type,
  props: { style, children },
});

export const GET: APIRoute = async () => {
  const [regular, medium, semibold] = await Promise.all([font(400), font(500), font(600)]);

  const tree = el(
    'div',
    {
      width: WIDTH,
      height: HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '80px',
      background: BG,
      color: INK,
      fontFamily: 'Instrument Sans',
    },
    [
      el('div', { fontSize: 28, fontWeight: 600, letterSpacing: '-0.28px' }, site.name),
      el(
        'div',
        { fontSize: 64, fontWeight: 500, lineHeight: 1.12, letterSpacing: '-1.6px', maxWidth: 980 },
        site.tagline,
      ),
      el(
        'div',
        {
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 24,
          color: MUTED,
          borderTop: `1px solid ${LINE}`,
          paddingTop: 24,
        },
        [el('span', {}, site.role), el('span', {}, site.location)],
      ),
    ],
  );

  const svg = await satori(tree as never, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Instrument Sans', data: regular, weight: 400, style: 'normal' },
      { name: 'Instrument Sans', data: medium, weight: 500, style: 'normal' },
      { name: 'Instrument Sans', data: semibold, weight: 600, style: 'normal' },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();

  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  });
};
