# Build stage
FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Deploy stage
FROM node:16
RUN npm install -g serve
COPY --from=build /app/build /app
EXPOSE 3000
CMD ["serve", "-s", "/app", "-l", "3000"]
