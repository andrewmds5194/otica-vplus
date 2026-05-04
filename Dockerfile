# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps first (better cache)
COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# Copy source and build
COPY frontend/ ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN yarn build

# --- Production stage ---
FROM nginx:1.27-alpine
# Static files
COPY --from=builder /app/build /usr/share/nginx/html
# Nginx config (SPA fallback + caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
