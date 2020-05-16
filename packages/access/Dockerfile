FROM node:lts-alpine AS build

WORKDIR /build
COPY . .

RUN yarn install
RUN yarn build
RUN rm -rf node_modules
RUN rm -rf packages/access/node_modules

FROM node:lts-alpine

COPY --from=build /build/build .

RUN yarn install --production

CMD [ "yarn", "workspace", "@lyricist/access", "start" ]
EXPOSE 3000