FROM node:18

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
COPY . .
CMD ["node", "dist/server.js"]