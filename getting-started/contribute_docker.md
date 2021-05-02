## Contributing to dogecoin.com (Docker Guide)



### Note:
Works for Mac/Ubuntu (and I think now Windows?)

We will build and run a docker container that will serve our website (index.html)

1. Clone repo `git clone https://github.com/dogecoin/dogecoin.com`
2. `cd dogecoin.com`
3. Install [Docker](https://www.docker.com/products/docker-desktop)
4. Build/tag the image, `docker build -t dogecoin.com:latest ./_contrib/docker/`
5. Run, `docker run -d --rm -p 0.0.0.0:5000:5000 --mount type=bind,source="$(pwd)",target=/code dogecoin.com:latest`
  - the container exposes port 5000, so we must map host port to container port
  - bind our root dir (host), to `/code/` dir (container), to pick up changes to files for live reload
6. Visit `localhost:5000` in your browser ( or `127.0.0.1:5000`)
7. Changes made to any files will automatically reload in browser
8. To stop, get the container id with `docker ps`, then stop the service with `docker stop <container_id>` (without gt/lt signs)
