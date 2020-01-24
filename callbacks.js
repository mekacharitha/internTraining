const testFolder = './';
const fs = require('fs');
/*const dir=(files)=>fs.readdir(files,(err,file) => {
            console.log(files);
            let count=0;
            for(let i in file) {
                if(count<9){
                    console.log("   "+file[count]);
                    count++;
                }
                else{
                    console.log("...others")
                    break
                }
            }
        });*/
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if(file.isDirectory){
        console.log(file);
    }else{
    fs.readdir(file,(err,files) => {
        console.log(file);
        let count=0;
        for(let i in files) {
            if(files[i].isDirectory){
                //console.log("fuctio called")
                //console.log(files[i])
                fs.readdir(files[i],(err,file) => {
                    console.log(files[i]);
                    fs.readdir(file[i],(err,f)=>
                    {
                        console.log(file[i])
                        let count=0;
                        for(let i in f) {
                            if(count<9){
                                console.log("   "+f[count]);
                                count++;
                            }
                            else{
                                console.log("...others")
                                break
                            }
                        }
                    });
                  let count=0;
                    for(let i in file) {
                        if(count<9){
                            console.log("   "+file[count]);
                            count++;
                        }
                        else{
                            console.log("...others")
                            break
                        }
                    }
                });
            }
            else{
            if(count<9){
                console.log("   "+files[count]);
                count++;
            }
            else{
                console.log("...others")
                break
            }
        }
        }
    });
      }
  });
});