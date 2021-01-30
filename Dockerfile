FROM node:14

WORKDIR /usr/src/ticker

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js", "--interval", "5000" ]