var fs = require('fs')

let fileReadStream = fs.createReadStream('index.js')

let count = 0;

let str = ''

fileReadStream.on('data',(chunk)=>{
    console.log(`${++count}接收到:${chunk.length}`);
    
})