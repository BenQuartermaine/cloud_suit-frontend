// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */

    data: {
      hasUserInfo: false,
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
},

  onLoad: function (options) {

  },

  bindPickerChange: function (e) {
    console.log('the chosen one!', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //事件处理函数
  getUserInfo: function (e) {
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
            wx.setStorageSync("currentUser", id)
            that.getinfo(e)
          }
        })
      }
    })


  },

  getinfo(e) {
    // update local storage with user info
    let user = wx.getStorageSync("currentUser")
    let currentUser = Object.assign(user, e.detail.userInfo)

    this.setData({
      currentUser: currentUser,
      hasUserInfo: true
    })

    wx.setStorageSync("currentUser", currentUser)
    wx.switchTab({
      url: "../account/account"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  buttonLink: function (){
    wx.redirectTo({
      url: '/pages/new/new',
    })
  }
})