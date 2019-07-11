import constant from "../../utils/constant.js";

Page({

  data: {
    type:1,
    keyword:undefined,
  },

  onLoad: function (options) {
    console.log(options)
    let { type, keyword }  = options;
    wx.setNavigationBarTitle({
      title: constant.names[type-1]
    })
    this.setData({
      type,
      keyword,
      constant,
      iconBgColor : constant.colors[type-1]
    })
  },

})