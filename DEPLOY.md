# Deploy — Ótica V+ no EasyPanel

Site estático React (Create React App + CRACO + Tailwind). Sem backend.

---

## 1. Preparação local (opcional — só se quiser testar antes)

```bash
cd frontend
yarn install
yarn build       # gera /frontend/build
yarn start       # opcional: roda em http://localhost:3000
```

Para testar o container localmente:
```bash
docker build -t oticavplus .
docker run --rm -p 8080:80 oticavplus
# abra http://localhost:8080
```

---

## 2. Subir no GitHub

No Emergent, clique em **"Save to GitHub"** e escolha um repositório (ex: `otica-vplus`).
A estrutura enviada para o GitHub deve conter, no mínimo:

```
otica-vplus/
├── frontend/            # código React
├── Dockerfile           # build + nginx
├── nginx.conf           # SPA fallback, gzip, cache
├── .dockerignore
└── DEPLOY.md            # este arquivo
```

> A pasta `backend/` pode ser ignorada — não é usada neste projeto.

---

## 3. Deploy no EasyPanel

### 3.1 Criar o serviço

1. Entre no painel do EasyPanel da sua VPS.
2. **Project → + Service → App**.
3. Dê um nome, ex: `otica-vplus`.

### 3.2 Conectar o repositório

Em **Source**:
- Provider: **GitHub** (autorize se ainda não autorizou)
- Repository: `seu-usuario/otica-vplus`
- Branch: `main`
- Build path: `/`  *(deixe vazio se o Dockerfile estiver na raiz)*

### 3.3 Configurar o build

Em **Build**:
- Method: **Dockerfile**
- Dockerfile path: `Dockerfile`

Em **Deploy**:
- Port: `80`

> Não há variáveis de ambiente necessárias — o webhook n8n e o link do WhatsApp já estão hardcoded no front (`/app/frontend/src/lib/brand.js`), pois o problema pediu "sem backend".

### 3.4 Domínio + HTTPS

Em **Domains**:
1. Clique **+ Add Domain**.
2. Informe seu domínio (ex: `oticavplus.com.br` ou `www.oticavplus.com.br`).
3. Aponte o DNS (registro **A**) do domínio para o IP da sua VPS.
4. Marque **HTTPS** — o EasyPanel emite o certificado Let's Encrypt automaticamente.

### 3.5 Deploy

Clique em **Deploy**. O EasyPanel vai:
- Clonar o repositório
- Rodar `docker build` (Node 20 + yarn install + yarn build → Nginx Alpine)
- Subir o container na porta 80 e fazer o proxy para o seu domínio com SSL

Pronto. Site no ar.

---

## 4. Atualizando o site

Sempre que mudar algo no código:
1. Faça o commit/push para o branch `main` no GitHub.
2. No EasyPanel, clique em **Deploy** novamente (ou ative *Auto Deploy* nas configurações do serviço para deploy automático a cada push).

---

## 5. Endpoints externos usados pelo site

- Webhook do formulário: `POST https://n8n.andrewmendes.com.br/webhook/Sitevemais`
  Payload: `{ "nome": "...", "telefone": "61995814792" }`
- WhatsApp: `https://wa.me/5561995814792`

Se um dia mudar qualquer um desses, edite `frontend/src/lib/brand.js`.

---

## 6. Troubleshooting rápido

| Problema | Solução |
|---|---|
| Build trava em `yarn install` | Sua VPS pode ter pouca RAM. Aumente swap ou use `node:20-alpine` (já é o padrão). |
| Página em branco após deploy | Limpe cache do navegador. Verifique se `index.html` está em `/usr/share/nginx/html` no container (`docker exec ... ls`). |
| Rotas internas dão 404 | Confirme que o `nginx.conf` tem `try_files $uri $uri/ /index.html;` (já está no arquivo entregue). |
| Formulário não envia | Abra DevTools → Network → veja se o POST sai. Erro de CORS é esperado e o redirect para o WhatsApp acontece de qualquer forma (comportamento intencional). |
| Imagens não aparecem | URLs do Pexels/Unsplash exigem internet. Se quiser servir local, baixe e coloque em `frontend/public/img/`. |

---

Pronto, é só seguir os passos. Se travar em algo específico, me avise. 🚀
