FROM node:13.0.1-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:13.0.1-alpine
RUN apk add --no-cache tini
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./
RUN npm ci
CMD ["node", "dist/index.js"]
