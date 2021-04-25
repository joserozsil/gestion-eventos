FROM node:8.11.1

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]


RUN npm run build:api

CMD ["node", "/usr/src/dist/api/index.js"]




