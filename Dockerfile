FROM node:19 AS build

COPY package.json .
RUN npm ci --only=production

COPY tsconfig.json .
COPY tsconfig.server.json .
COPY src/common ./src/common
COPY src/server ./src/server
RUN npm run "server: build: release"

CMD [ "node", "dist/server/index.js" ]
