const {readFile,} = require ('fs')

console.log("start");
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('first task completed');
})
console.log("loading next task ...");