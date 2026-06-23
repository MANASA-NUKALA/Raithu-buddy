# Multi-stage build: build frontend, then build backend and copy dist

# Stage 1: build frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
COPY frontend/vite.config.js ./
COPY frontend/ .
RUN npm ci && npm run build

# Stage 2: build backend
FROM node:18-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
COPY backend/ .
RUN npm ci --production

# Stage 3: final image
FROM node:18-alpine
WORKDIR /app
# copy backend
COPY --from=backend-builder /app/backend ./backend
# copy frontend dist
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist
WORKDIR /app/backend
ENV NODE_ENV=production
EXPOSE 4000
CMD ["node", "src/index.js"]
