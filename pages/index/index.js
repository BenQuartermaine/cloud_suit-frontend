// pages/index/index.js
Page({

data: {},
  //事件处理函数
  getUserInfo: function (e) {
    console.log(e)
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

