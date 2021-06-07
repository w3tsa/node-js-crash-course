const fs = require('fs');

const readStream = fs.createReadStream('./bigData.txt', {'encoding' : 'utf8'});
const writeStream = fs.createWriteStream('./chunkData.txt', {'encoding' : 'utf8'});

// readStream.on('data', (chunk) => {
//     console.log('---new chunk---')
//     console.log(chunk)
//     writeStream.write('\n New Chunk \n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)


