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

FROM nginx:stable
EXPOSE 3000
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
