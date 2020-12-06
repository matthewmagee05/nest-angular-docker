## Running locally

Run:

```bash
docker-compose up
```

Got to `localhost:3050`. If you see `Hello World!` displayed your app is working.

## Building Images

cd to my-app and run:

```bash
docker build -t <your-username>/angular-frontend .
```

cd to backend and run:

```bash
docker build -t <your-username>/nestjs-backend .
```

## Pushing to Docker

Run:

```bash
docker push <your-username>/angular-frontend
docker push <your-username>/nestjs-backend
```

## Deploying to Kubernetes

### Kubernetes setup

- Make sure kubectl cli is installed [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- Make sure minikube is installed [here](https://minikube.sigs.k8s.io/docs/start/)

Run:

```bash
minikube start --driver='virtualbox'
minikube addons enable ingress
```

cd to k8s. Run:

```bash
kubectl apply -f api-deployment.yml
kubectl apply -f api-service.yml
kubectl apply -f client-deployment.yml
kubectl apply -f client-service.yml
kuebctl apply -f ingress.yml
```

Run

```bash
kubectl get ingress
```

This will print out the address needed to load in your browser.
Go to the address and if you see `Hello World!` displayed your app is now running in a Kubernetes Cluster.
