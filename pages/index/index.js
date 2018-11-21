//index.js
//获取应用实例

Page({
  data: {},
  
  onLoad: function (options) {
    let that = this;

    wx.request({
      url: 'https://cloud-suite.herokuapp.com/api/v1/jets',
      method: 'GET',
      success(res) {
        console.log(res)
        const jets = res.data
        that.setData(
          jets
        )
      }
    })
  },
  //事件处理函数
  getUserInfo: function (e) {
    // update local storage with user info
    let user = wx.getStorageSync("currentUser")
    let currentUser = Object.assign(user, e.detail.userInfo)

    wx.setStorageSync("currentUser", currentUser)
  },
  jumpToPage: function () {
    wx.navigateTo({
      url: "../results/results"
    });
  }
})
