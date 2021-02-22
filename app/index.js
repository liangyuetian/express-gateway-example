const path = require('path');
const { spawn } = require('child_process');
const cats = require('./cats');
const coffee = require('./coffee');

// const exec = require('util').promisify(require('child_process').exec);

(async function bootstrap() {
    await cats.run()
    await coffee.run()
    // const arg = path.join(__dirname, '../', 'server.js')
    // const { stdout, stderr } = await exec(`node ${arg}`)

    const server = spawn('node', [path.join(__dirname, '../', 'server.js')]);
    server.stdout.on('data', (data) => {
        let str = data.toString()
        str = str.replace(/\n/g, '')
        console.log(str)
    })
    server.stderr.on('data', (data) => {
        let str = data.toString()
        str = str.replace(/\n/g, '')
        console.log(str)
    })
    server.on('close', (code) => {
        console.log(`子进程退出，退出码 ${code}`);
    })
})()
