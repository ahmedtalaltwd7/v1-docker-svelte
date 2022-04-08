# FROM node

# WORKDIR /app

# COPY package*.json /app/
# RUN npm install

# COPY . ./

# EXPOSE 3000
# CMD ["node","build"]


FROM node:16.13.1-alpine3.14 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production
ENV PORT 5050
EXPOSE 5050
CMD ["node","build"]


# FROM node:16.13.1-alpine3.14
# USER node:node
# WORKDIR /app
# COPY --from=builder --chown=node:node /app/build ./build
# COPY --from=builder --chown=node:node /app/node_modules ./node_modules
# COPY --chown=node:node package.json .
# ENV PORT 5050
# EXPOSE 5050
# CMD ["node","build"]

# docker build . -t sveltekit2:alpine-multistage
# docker run -d -p 5050:5050 --name sveltekit-app2 sveltekit2:alpine-multistage