import constant from "../../utils/constant.js";
import api from "../../api/api.js";

Page({
  data: {
    value: "",
    loading : "",
    result: [],
    constant : null
  },
  onLoad: function (options) {
    this.setData({constant})
  },
  onSearch: function(e){
    console.log(this.data.value)
    this.setData({loading:true})
    let that = this;
    api.getDataByWord(this.data.value)
    .then(res=>{
      console.log(res)
      that.setData({loading:false,result:res})
    })
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