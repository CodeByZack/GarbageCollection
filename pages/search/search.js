// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    value: "",
    result: [{ name: "sds", type: 1 }, { name: "dfdf", type: 2 }]
  },
  onLoad: function (options) {

  },
  onSearch: function(e){
    console.log(this.data)
  },
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },
  jumpDetail: function (e) {
    let data = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?type=${data.type}&keyword=${data.keyword}`
    })
  }

})