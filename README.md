# Leonardo Precioso — Site

Este repositório contém o site institucional do palestrante e fundador do Instituto Recomeçar, construído com Astro (output: static) e TailwindCSS.

Como contribuir
- Instale dependências: `npm install`
- Rodar em desenvolvimento: `npm run dev`
- Gerar build de produção: `npm run build`

SEO e performance
- Fonts: Poppins self-hosted via @fontsource-variable/poppins
- Imagens: componentes `Picture` com AVIF/WebP e widths responsivos
- Sitemap e robots.txt configurados

Arquivos relevantes
- `src/layouts/Layout.astro` — metatags e layout base
- `src/components/SchemaOrg.astro` — JSON-LD para SEO
- `src/data/*` — conteúdo (FAQ, livro, contatos)

Deploy
- O site é estático; faça deploy para Netlify, Vercel, ou qualquer host estático apontando para a pasta `dist`.

