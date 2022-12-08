# get the base node image
FROM node:17 as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend

# install npm dependencies
RUN npm ci

# copy other project files
COPY . .

CMD [ "npm", "run", "start" ]

