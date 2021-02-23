const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello coffee /')
})

app.get('/coffee', (req, res) => {
    console.log(req.url)
    res.send({
        text: 'hello coffee'
    })
})
app.get('/coffee/name', (req, res) => {
    res.send({
        text: 'hello coffee',
        path: '/coffee/name'
    })
})
app.get('/coffee/v1/name', (req, res) => {
    res.send({
        text: 'hello coffee',
        path: '/coffee/v1/name'
    })
})

app.get('/healthz', (req, res) => {
    res.send('coffee ok')
})

module.exports = {
    run: () => {
        return new Promise(resolve => {
            app.listen(4002, () => {
                console.log('coffee run port 4002')
                resolve()
            })
        })
    }
}
