// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userId = wx.getStorageSync("userId")
    if (userId) {
      wx.switchTab({
        url: "../account/account"
      });
    }else {
      let that = this
      const host = 'https://cloud-suite.herokuapp.com/'
      console.log('processing to login')
      // get tecent code
      wx.login({
        success: (res) => {
          // give code to backend
          wx.request({
            url: host + 'login',
            method: 'post',
            data: {
              code: res.code
            },
            // backend return openid
            success: (res) => {
              console.log(res)
              let id = { id: res.data.userId }
              // save openid to local storage
              wx.setStorageSync("userId", id)
            }
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    let userInfo = e.detail.userInfo
    wx.setStorageSync("userInfo", userInfo)
    
    wx.switchTab({
      url: "../account/account"
    });

  },

  getinfo(e) {
    // update local storage with user info
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})