//block function
const fs = require('fs');

const data = fs.readFileSync('file.txt');

console.log(data);

//non-block function
const fs = require('fs');

fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});