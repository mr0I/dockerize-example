## Docker commands

```bash
docker build -t nodeapp .
docker run -d --name my-nodeapp -p 8000:3000 nodeapp
docker build -t nodeapp:dev -f Dockerfile.dev .
```
