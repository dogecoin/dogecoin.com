## Contributing to dogecoin.com (Docker Guide)



### Note:
Works for Mac/Ubuntu (and I think now Windows?)

We will build and run a docker container that will serve our website (index.html)

1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. `docker build -t dogecoin.com:latest .`
3. `docker run -p 0.0.0.0:5000:5000 --mount type=bind,source="$(pwd)",target=/code dogecoin.com:latest`
  - the container exposes port 5000, so we must map host port to container port
  - bind our root dir (host), to `/code/` dir (container), to pick up changes to files for live reload

