### pull mongo image from docker hub

```
docker run --name mongodb -d --rm -p 27018:27017 mongo
```

### Commands

```
docker network create todo-net
docker network ls
docker run --name mongodb --network todo-net -d --rm mongo
docker build -t todoapp . # backend image
docker build -t restapi-front-image . # frontend image
docker run --name my-todo-app --network todo-net -p 8000:8000 --rm todoapp
docker run --name todo-front -p 3000:3000 -it --rm restapi-front-image
## volume option is used to handle hot reload ##
docker run --name frontend -p 3000:3000 -it -v $(pwd)/src:/app/src --rm restapi-front-image
docker run --name backend --network todo-net -p 8000:8000 -v $(pwd)/src:/app/src --rm todoapp
docker run --name mongodb --network todo-net -v restapi_data:/data/db -d --rm mongo
```

### docker-compose

```
docker-compose up -d
docker-compose down
```
