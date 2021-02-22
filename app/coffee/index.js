const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello coffee /')
})

app.get('/coffee', (req, res) => {
    res.send('hello coffee')
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
