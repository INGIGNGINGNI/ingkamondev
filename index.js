const connect = true;
const url1 = "ing.dev/File.json";
const url2 = "ing.dev/File2.json";

function download(url) {
    return new Promise(function(reslove, reject){
        console.log(`System downloading file from ${url}`)
        setTimeout(() => {
            if(connect) {
                reslove(`Download ${url} complete`)
            }
            else {
                reject("Failed to download file.")
            }
        },2000)
    })
}

//Promise
// download(url1).then(function(result){
//     console.log(result)
//     return download(url2)
// }).then(function(result) {
//     console.log(result)
// })

// Async & Await