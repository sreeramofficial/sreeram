FROM node:dubnium-alpine AS icarus-builder
# RUN apk update \
#   && apk add \
#       libpng \
#       python \
#   && apk add \
#       tzdata \
#       make \
#       g++ \
#       gcc \
#       libpng-dev \
#       libtool \
#       autoconf \
#       automake \
#       nasm \
#       --virtual .build-deps \
#   && cp /usr/share/zoneinfo/Europe/Vienna /etc/localtime
ADD package.json /icarus/
ADD package-lock.json /icarus/
WORKDIR /icarus/
RUN npm run setup

FROM icarus-builder AS icarus
WORKDIR /icarus/
ENV NODE_ENV="production"
ADD . /icarus/
RUN npm run build
EXPOSE 3000/tcp
CMD [ "npm", "start" ]