//index.js
//获取应用实例
const app = getApp()
import api from "../../api/api.js";

Page({
  data: {
    active : 1,
    value: "",
    loading: true,
    questions:[{},{},{},{},{}]
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
  },
  addNewQuestion: function(){
    this.setData({show:true})
    console.log("---------------")
  },
  onClose: function(){
    this.setData({show:false,value:""})
  },
  onConfirm: function(){
    console.log(this.data.value)
  },
  handleInput: function(e){
    console.log(e)
    this.setData({value:e.detail.value})
  },
  showQuestion:function(e){
    wx.navigateTo({
      url: `/pages/questionDetail/questionDetail`
    })
  }
})
