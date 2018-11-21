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

  bindPickerChange: function (e) {
    console.log('the chosen one!', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //事件处理函数
  getUserInfo: function (e) {
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