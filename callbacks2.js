//REQUIREMENTS
// 1. Pass the directory name using command line argument
// 2. Access the input directory in such a way that it should read all the files and subdirectories in it but with a condition that it should not exceed 10 contents .
// 3. If the accessed one is a sub directory repeat the accessing process as in step2
// 4. the output should be in the following manner
// mainDir
//      SubDir1
//              file11
//              file12
//              file13
//              ...others(if there are more than 10 contents)
//      subDir2
//              file21
//              file22
//      file1
//      file2
//    



const fs = require('fs');
let path = process.argv[2];

const mainFunc=(path,s)=>{
    let i=1,flag=0;
    fs.readdir(path, (err , dir)=>{
    dir.forEach(item => {
       
        fs.stat(pathIncrement(path,item), function(err, stats) {
            if(stats.isDirectory()){
                console.log(indent(s)+item)
                i++;
               mainFunc(pathIncrement(path,item),s+4)
            }
            else{
                if(i<11){
                    console.log(indent(s)+item)
                    i++;
                }
                else{
                    console.log(indent(s)+"....others")
                    s=1;
                }
            }  
                  
        }); 
        if(flag==1)
                return;  
        
    })
    
})
}

mainFunc(path,0);

//function to increment the directory address.
const pathIncrement = (prev , curr)=>{
    curr = prev+'/'+curr
    return curr
}


function indent(i){
    let space = ''
    for(let ind = 0; ind<i ; ind++){
        space = space + ' ';
    }
    return space;
}