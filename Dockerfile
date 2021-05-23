FROM node:dubnium-alpine AS project-icarus-builder
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
ADD package.json /project-icarus/
ADD package-lock.json /project-icarus/
WORKDIR /project-icarus/
RUN npm run setup

FROM project-icarus-builder AS project-icarus
WORKDIR /project-icarus/
ENV NODE_ENV="production"
ADD . /project-icarus/
RUN npm run build
EXPOSE 3000/tcp
CMD [ "npm", "start" ]
