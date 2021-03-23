FROM node:14-alpine3.12

LABEL maintainer Nick <nick@night.com>

RUN apk add --no-cache \
    bash \
    gcc &&\
    npm -g install live-server &&\
    rm -rf /tmp/*

WORKDIR /code

EXPOSE 5000

# run live server
CMD ["live-server", "--host=0.0.0.0", "--port=5000", "--no-browser"]
