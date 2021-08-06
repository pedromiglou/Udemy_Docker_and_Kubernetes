# build phase
FROM node:alpine
WORKDIR '/usr/app'
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

# run phase
FROM nginx
COPY --from=0 /usr/app/build /usr/share/nginx/html