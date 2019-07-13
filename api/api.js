
let Bmob = require("./Bmob-1.6.5.min.js");
const Table_garbage = "garbage";

let ALL_DATA = null;


const getAllData = function () {
  const query = Bmob.Query(Table_garbage);

  if(ALL_DATA)return Promise.resolve(ALL_DATA);
  
  return query.find().then(res=>{
    ALL_DATA = res;
    return ALL_DATA
  })
}

const getDataByWord = function (word) {
  if(!ALL_DATA){
    return getAllData().then(res=>{
      return res.filter(da => da.name.includes(word))
    })
  }else{
    return Promise.resolve(ALL_DATA.filter(da => da.name.includes(word))) 
  }
}



export default {
  getAllData,
  getDataByWord
}