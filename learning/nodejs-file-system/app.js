import * as fs from 'node:fs';

// Reda file
// fs.readFile('calc.js', 'utf-8', function (err, data) {
//   console.log(data);
// });

// Write to file
// fs.writeFile('calc1.js', 'console.log("done")', function (err) {
//   console.log('Data Saved');
// });

// Append to file
// fs.appendFile('calc1.js', 'console.log("done")', function (err) {
//   console.log('Data Saved');
// });

// Delete file
fs.unlink('calc1.js', function (err) {
  console.log('Deleted');
});
