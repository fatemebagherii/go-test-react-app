# React + Vite

To run the app through nginx reverse proxy and docker, simply run `docker build -t react-web-app . ` to build the docker container, and `docker run -p 3000:80 react-web-app`. You can choose any open port instead of `3000`. Then, go to your web browser and type `http://localhost:3000/`.

