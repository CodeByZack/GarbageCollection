//index.js
//获取应用实例
const app = getApp()
import api from "../../api/api.js";

Page({
  data: {
    active : 0,
    value: "",
    loading: true,
    list: ["香d蕉皮", "香蕉d皮", "香蕉ss皮", "香蕉皮ss", "香蕉皮dd", "香蕉dd皮", "香蕉a皮", "香蕉w皮", "香蕉e皮", "香蕉d皮",]
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData:function(){
    this.setData({loading:true});
    wx.showLoading({
      title: '加载数据中。。。',
      mask: true,
    })
    let that = this;
    api.getAllData().then(
      res => {
        console.log(res)
        let food = res.filter(d => d.type == 0)
        let recycle = res.filter(d => d.type == 1)
        let bad = res.filter(d => d.type == 2)
        let other = res.filter(d => d.type == 3)
        that.setData({ food, recycle, bad, other,loading:false })
        wx.hideLoading()
      });
  },
  onTabChange: function(event){
    console.log(event)
    this.setData({
      active : event.detail
    })
  },
  onSearch: function(event){
    wx.navigateTo({
      url: `/pages/search/search`
    })
  },
  jumpDetail: function(e){
    let data = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?type=${data.type}&keyword=${data.keyword}`
    })
  }
})
