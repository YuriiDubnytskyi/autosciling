const express = require('express')
const app = express()
const port = 5000

const getIP = require('external-ip')();
let ipishka
getIP((err, ip) => {
    if (err) {
        // every service in the list has failed
        throw err;
    }
    ipishka = ip
    console.log(ip);
});

app.get('/', (req, res) => {
  res.send('Hello World! Yurii Dubnytskyi Node IP:'+ipishka)
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
