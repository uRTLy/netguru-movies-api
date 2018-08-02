FROM node:alpine

ENV HOST 0.0.0.0

WORKDIR /usr/app

COPY package.json yarn.lock .env /usr/app/

RUN yarn install

COPY . .

EXPOSE 3000