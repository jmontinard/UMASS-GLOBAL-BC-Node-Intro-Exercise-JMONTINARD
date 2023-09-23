const fs = require('node:fs');
const axios = require('axios');


function cat (path){
fs.readFile(path,'utf-8',(err, data)=>{
    if(err){
        console.log(err)
        process.kill(1)
    }
    console.log(data)
})



}

// cat(process.argv[2])

async function webCat(url){
try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (err) {
    console.error(`${url}: ${err}`);
    process.exit(1);
  }
}



if(process.argv[2].includes('.txt')) cat(process.argv[2])
else webCat(process.argv[2])

