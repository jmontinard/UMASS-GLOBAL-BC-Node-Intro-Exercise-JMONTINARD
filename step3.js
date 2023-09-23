const fs = require('node:fs');

const axios = require('axios');

// function cat (path){
// fs.readFile(path,'utf-8',(err, data)=>{
//     if(err){
//         console.log(err)
//         process.exit(1)
//     }
//     console.log(data)
// })

// }


// function catWrite (path){
//     fs.writeFile(process.argv[3],path,{encoding: 'utf8', flag:'a'},(err, data)=>{
//         if(err){
//             console.log(err)
//             process.exit(1)
//         }
//         console.log('no output, but new.txt contains contents of one.txt')
//     })
    
//     }


// async function webCat(url){
//     try {
//         const res = await axios.get(url);
//         console.log(res.data);
//       } catch (err) {
//         console.error(`${url}: ${err}`);
//         process.exit(1);
//       }
//     }

// async function webCatWrite(url){
   
//         try {
//             const res = await axios.get(url);
//             fs.writeFile(process.argv[3],res.data,{encoding: 'utf8', flag:'a'},(err, data)=>{
//                 if(err){
//                     console.log(err)
//                     proceexit(1)
//                 }
//                 console.log('no output, but new.txt contains contents of google.html')
//             })
        
//           } catch (err) {
//             console.error(`${url}: ${err}`);
//             process.exit(1);
//           }

    
// }
    


// if (process.argv[2]=== '--out'){
//     if(process.argv[4].includes('.txt')) catWrite(process.argv[4])
//     else webCatWrite(process.argv[4])
    
// }else {

// if(process.argv[2].includes('.txt')) cat(process.argv[2])
// else webCat(process.argv[2])

// }


// v2: 

function handleoutput(content,output){
    if(output === process.argv[3]){
        fs.writeFile(output,content,{encoding: 'utf8', flag:'a'},(err, data)=>{
            if(err){
                console.log(err)
                process.exit(1)
            }
            console.log(content)
        })   
    }
}

function cat (path,output){
    fs.readFile(path,'utf-8',(err, data)=>{
        if(err){
            console.log(err)
            process.exit(1)
        }else{
            handleoutput(data,output)
        }
        
    })
    
    }
    

    
    async function webCat(url,output){
        try {
            const res = await axios.get(url);
            handleoutput(res.data,output);
          } catch (err) {
            console.error(`${url}: ${err}`);
            process.exit(1);
          }
        }
    

        
        let path;
        let output
    
if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
  } else {
    path = process.argv[2];
  }
  
  if (path.slice(0, 4) === 'http') {
    webCat(path, out);
  } else {
    cat(path, out);
  }
    // if (process.argv[2]=== '--out'){

    //     if(process.argv[4].includes('.txt')) catWrite(process.argv[4])
    //     else webCatWrite(process.argv[4])
        
    // }else {
    
    // if(process.argv[2].includes('.txt')) cat(process.argv[2])
    // else webCat(process.argv[2])
    
    // }
    