//index.js
//获取应用实例

Page({
  data: {
   array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  
bindPickerChange: function (e) {
    console.log('the chosen one!', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
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
