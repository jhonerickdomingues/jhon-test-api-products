FROM node:18.16-buster-slim AS builder

RUN npm install --location=global http-server express

WORKDIR /

COPY package*.json ./

RUN npm install --unsafe-perm

COPY . .
# RUN cp .env.prod .env

RUN npm run build --unsafe-perm
RUN cp .env.example ./build/.env

EXPOSE 3333
ENTRYPOINT ["node", "./build/server.js"]
