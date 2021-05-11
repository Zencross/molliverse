FROM node:12.16.3-alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN yarn

COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "start"]
