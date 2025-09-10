const { readFile } = require("fs");

console.log("Started a task");
//Check File path
readFile("../content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed first task");
});
console.log("Started next task");
