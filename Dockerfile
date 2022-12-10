# Build stage
FROM node:16 AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Package stage
FROM nginx:stable
EXPOSE 3000
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
CMD ["nginx", "-g", "daemon off;"]
