const path  = require("path");  // 引入 path 路径模块
const lessc = require("./lessc");
const nodewatch = require('node-watch');
 
const root = path.join(__dirname, '../')

nodewatch(root, { recursive: true,filter: /\.less$/ }, function(evt, name) {
  console.log('%s changed.', name);
  let srcPath = name;
  let distPath =  name.replace("less","wxss");
  lessc.build(srcPath,distPath);
});
