FROM node:lts-alpine AS build

WORKDIR /build
COPY . .

RUN yarn install
RUN yarn workspace @lyricist/access build
RUN rm -rf node_modules
RUN rm -rf packages/access/node_modules
RUN rm -rf packages/access/src

FROM node:lts-alpine

WORKDIR /app
COPY --from=build /build/packages/access ./packages/access
COPY --from=build /build/yarn.lock .
COPY --from=build /build/package.json .

RUN yarn install --production

CMD [ "yarn", "workspace", "@lyricist/access", "start" ]
EXPOSE 3000