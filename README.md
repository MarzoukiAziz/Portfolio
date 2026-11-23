# azizmarzouki.com

Personal site of Aziz Marzouki, Tech Lead – AI & Cloud at [Algora](https://algora.lu), Luxembourg.

Next.js 14 (App Router, static export) · TypeScript · Tailwind CSS · Firebase Hosting.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

```bash
npm run build      # writes the static site to ./out
firebase deploy --only hosting
```

Content lives in `components/` (one file per section) and `lib/site.ts` (name, role, links).
