
let Bmob = require("./Bmob-1.6.5.min.js");
const Table_garbage = "garbage";


const getAllData = function () {
  const query = Bmob.Query(Table_garbage);
  return query.find();
}




export default {
  getAllData
}