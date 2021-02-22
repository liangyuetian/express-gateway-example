const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('hello cats')
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
