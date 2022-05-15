const client = require('prom-client');

// Create a Registry to register the metrics
const register = new client.Registry();
client.collectDefaultMetrics({register});

const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in microseconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
})

register.registerMetric(httpRequestDurationMicroseconds)


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const end = httpRequestDurationMicroseconds.startTimer()
  res.send('Hello World! updated 2')
  end({ route, code: res.statusCode, method: req.method })
})


app.get('/metrics', async (req, res) => {
    // Start the timer

  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})