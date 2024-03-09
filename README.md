# Configura and run the project

Clone this reposority. After that, do this:

```
docker compose build
docker compose up
```


Check if the Api is up and running: http://localhost:8080/Api/Test

Check Api metrics: http://localhost:8080/metrics

<img width="464" alt="image" src="https://github.com/faulycoelho/api-prometheus-grafana-k6/assets/37049426/aa762b9c-1281-4248-9438-ea06cd5afadb">


check if the target is up and running on Prometheus: http://localhost:9090/targets


![image](https://github.com/faulycoelho/api-prometheus-grafana-k6/assets/37049426/fe6f9e42-3c67-4b41-a135-058f2dadafc4)


Go to Grafana and add a new datasource to Prometheus:
url: https://prometheus:9090

Add dashboards:
```sum by(code) (http_request_duration_seconds_bucket)```

![image](https://github.com/faulycoelho/api-prometheus-grafana-k6/assets/37049426/da5a0f2e-72f4-45d9-8f52-d948ac66fc3e)




run k6 to see more data:
```k6 run scenarios/index.js --vus 20 --duration 60s```

![image](https://github.com/faulycoelho/api-prometheus-grafana-k6/assets/37049426/eed027e6-5628-4e97-a395-b2df16a68b18)


