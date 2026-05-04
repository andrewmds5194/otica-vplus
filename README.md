# Ótica V+ — Landing Page

Site institucional da Ótica V+ (Brasília/DF). React + Tailwind, frontend estático, formulário integrado com webhook n8n e redirect para WhatsApp.

## Como rodar localmente
```bash
cd frontend
yarn install
yarn start
```

## Como fazer deploy
Veja **DEPLOY.md** para o passo a passo no EasyPanel (Docker + Nginx).

## Estrutura
- `frontend/` — código React (CRA + CRACO + Tailwind)
- `Dockerfile` — build de produção
- `nginx.conf` — config do servidor
- `DEPLOY.md` — manual de deploy

## Endpoints externos
- WhatsApp: https://wa.me/5561995814792
- Webhook formulário: https://n8n.andrewmendes.com.br/webhook/Sitevemais

Para alterar, edite `frontend/src/lib/brand.js`.
