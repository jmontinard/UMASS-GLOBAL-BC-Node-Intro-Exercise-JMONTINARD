const fs = require('node:fs');


function cat (path){
fs.readFile(path,'utf-8',(err, data)=>{
    if(err){
        console.log(err)
        process.kill(1)
    }
    console.log(data)
})

}

cat(process.argv[2])