//app.js

let Bmob = require('./api/Bmob-1.6.5.min.js');
Bmob.initialize("2c748595700f7463f6c9d08f001a2d8b", "3829cb511c49cf20864c887e8d4f2fef");


App({
  onLaunch: function () {
    let that = this;
  },
  globalData: {
    userInfo: null

  }
})