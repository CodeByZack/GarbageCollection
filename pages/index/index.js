//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active : 0,
    value: "",
    list: ["香d蕉皮", "香蕉d皮", "香蕉ss皮", "香蕉皮sss", "香蕉皮ddd", "香蕉dd皮", "香蕉a皮", "香蕉w皮", "香蕉e皮", "香蕉d皮",]
  },
  onLoad: function () {

  },
  onChange(e) {
    this.setData({
      value: e.detail
    });
  },
  onTabChange: function(event){
    console.log(event)
    this.setData({
      active : event.detail
    })
  },
  onSearch: function(event){
    console.log(event);
    console.log(this.data.value)
  },
  jumpDetail: function(e){
    let data = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?type=${data.type}&keyword=${data.keyword}`
    })
  }
})
