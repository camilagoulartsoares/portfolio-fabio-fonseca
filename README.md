# Portfólio — Fábio Fonseca

Site profissional de engenharia mecânica (Next.js + Tailwind + Framer Motion).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build estático

```bash
npm run build
```

A pasta `out/` é gerada para deploy (GitHub Pages).

## Deploy

O workflow em `.github/workflows/deploy.yml` publica em GitHub Pages após push em `main`.

Configure em **Settings → Pages → Source: GitHub Actions**.

URL esperada: `https://camilagoulartsoares.github.io/portfolio-fabio-fonseca/`
