FROM node:14-alpine3.12

LABEL maintainer Nick <nick@night.com>

RUN apk add --no-cache \
    bash \
    git \
    make \
    gcc &&\
    rm -rf /tmp/*

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm ci --no-optional

ADD ./ ./

EXPOSE 5000

# run dev server
CMD ["npm", "run", "start:dev"]
