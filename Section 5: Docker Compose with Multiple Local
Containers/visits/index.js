//get dependencies
const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server', //docker will know that this is another container
    port: 6379
});

client.set('numVisits', 0);

app.get('/', (req, res) => {
    client.get('numVisits', (err, numVisits) => {
        res.send('Number of visits: ' + numVisits);
        client.set('numVisits', parseInt(numVisits)+1);
    })
})

app.listen(8081, () => {
    console.log('Listening on port 8081');
})