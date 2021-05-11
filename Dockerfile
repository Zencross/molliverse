FROM node:12.16.3-alpine

WORKDIR /app

COPY . .
RUN yarn

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN yarn build

CMD ["yarn", "start"]
