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
//      ...others(if there are more than 10 contents)


const fs = require('fs');
// taking input from command line argument
const dir = process.argv[2];

//function to print the directories using path specified
async function print(path,s) {
    //async opening a directory
    const dir = await fs.promises.opendir(path)
    //to count the number of files and folders
    let i = 0;
    //dirent are objects for directory object
    for await (const dirent of dir) {
        if(i<10){
            console.log(indent(s)+dirent.name)
        }
        else{
            console.log(indent(s)+'...other')
            return
        }
        i+=1
        try {
            //if dirent object is a folder then aynchronously
            //enter it and print the contents.
            if (dirent.isDirectory()) {
                await print('./' + directoryIncrement(path,dirent.name),s*4).catch(console.error)
            }
        }
        catch(e)
        {
            console.error(e.name)
        }
    }
}
//calling the print directory from the root path provided.
print(dir,1).catch(console.error)

// function to give indentation
function indent(i){
    let space = ''
    for(let ind = 0; ind<i ; ind++){
        space = space + ' ';
    }
    return space;
}
//function to increment the directory address.
function directoryIncrement(current,next){
    current = current+'/'+next
    return current
}