// const {writeFileSync} = require ('fs')

// for ( let i =  0; i< 10000; i++){
//     writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
// }

//Or
const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 9999,
    encoding: 'utf-8'


})

stream.on('data', (result)=> {
    console.log(result);
})