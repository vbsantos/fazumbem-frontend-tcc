FROM node:16 AS builder
# set working directory
WORKDIR /app
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# Copies everything over to Docker environment
COPY . ./
RUN npm run build

FROM node:16-alpine
EXPOSE 3000
# Set working directory to nginx resources directory
WORKDIR /frontend
# Copies static resources from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
CMD ["npx", "serve", "-s", "build"]
