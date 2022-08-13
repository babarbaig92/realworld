# syntax=docker/dockerfile:experimental
FROM node:16.14.0-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

ARG TIMESTAMP=invalidate-cache
RUN npm run build

EXPOSE 3000

CMD ["npm", "start", "-H", "0.0.0.0", "-p", "3000"]
