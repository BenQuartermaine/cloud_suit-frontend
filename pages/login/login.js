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
    // get user id from local storage if any
    let userId = wx.getStorageSync("userId")
    if (userId) {
      // if already logged in, switch directly to account page
      wx.switchTab({
        url: "../account/account"
      });
    }else {
      // if haven't logged in, do the login process
      let that = this
      const host = 'https://cloud-suite.herokuapp.com/'
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
              // save openid to local storage
              wx.setStorageSync("userId", res.data.userId)
            }
          })
        }
      })
    }
  },

  getUserInfo: function (e) {
    // when user click the login button, get the userInfo
    let userInfo = e.detail.userInfo
    // store into local storage
    wx.setStorageSync("userInfo", userInfo)
    
    wx.switchTab({
      url: "../account/account"
    });

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