https://www.youtube.com/watch?v=m2zM3zOZl34
grafana guide https://stackabuse.com/nodejs-application-monitoring-with-prometheus-and-grafana/
prometehus: https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana
https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana
kafka: https://www.youtube.com/watch?v=EiDLKECLcZw https://www.jymslab.com/simple-example-kafka-node-js/
k8s: https://www.youtube.com/watch?v=u3sXfcncrJQ

grafana monitoring of containers
persistent state
rabbitmq
    broadcast messaging
    dead letter queue
    scalking
kafka
    broadcast messaging
    dead letter queue
    scaling

move out env variables
kubernetes
helm
ingress
kafka ui
react router

redis
terraform
ansible
elastic stack
jaeger
new relic
jenkins
oauth
sso
Pushgateway
appollo graphql
advanced prometehus
types of grafana metrics
mqtt
fix volumes for grafana
docker compose vs k8s
load testing
nodejs event loop
cookies
verisioning
start via docker compose
sentry
certs for k8s
cookie-based session affinity,
microservice patters

```bash
docker compose up -d --build --force-recreate --no-deps
docker compose down
```

start minikube

```bash
adduser regular-user
usermod -aG sudo regular-user
su - regular-user
minikube start --driver=docker
minikube dashboard
minikube dashboard --url
kubectl proxy --address='0.0.0.0' --disable-filter=true
# dashboard will be available on /api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy
```

use minikube docker env

```
eval $(minikube docker-env)
```