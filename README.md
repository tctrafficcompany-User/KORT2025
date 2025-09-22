
# KORT — Next.js + Tailwind + next-intl

## Локально
pnpm install --no-frozen-lockfile
pnpm dev

## Vercel (надежный сценарий)
Settings → Build & Development:
- Node.js Version: 20.x
- Install Command:
  corepack enable && corepack prepare pnpm@8.15.4 --activate && pnpm install --no-frozen-lockfile
- Build Command:
  pnpm build

После изменения настроек → Deployments → ⋯ → Redeploy → Clear cache and redeploy.
