FROM node:lts-alpine3.15

COPY package.json .
COPY package-lock.json .
RUN npm install
ADD . .
RUN npm install -g @prisma/client prisma && prisma generate

CMD ["npm","run","start"]