const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({
        text: 'hello cats /'
    })
})

app.get('/cats', (req, res) => {
    res.send({
        text: 'hello cats'
    })
})

app.post('/cats', (req, res) => {
    res.send({
        text: 'hello cats'
    })
})

app.get('/healthz', (req, res) => {
    res.send('cats ok')
})

module.exports = {
    run: () => {
        return new Promise(resolve => {
            app.listen(4001, () => {
                console.log('cats run port 4001')
                resolve()
            })
        })
    }
}
