# base image
FROM node:alpine

# specify the folder in the docker image that will host the app
WORKDIR /usr/app

# copy package.json to docker image
COPY ./package.json .

# install dependencies
RUN npm install

# copy all files to docker image
COPY . .

# default command
CMD ["npm", "start"]