FROM node:18.19.0-alpine AS base
RUN apk add --no-cache tini
WORKDIR /usr/src/app

FROM base AS builder
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM base
COPY --from=builder /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm ci --production
CMD ["node", "dist/index.js"]
