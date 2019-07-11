//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active : 0,
    value: ""
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
  }
})
