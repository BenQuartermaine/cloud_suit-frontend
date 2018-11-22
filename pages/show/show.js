// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  clicklink: function(e) {
    console.log(e)
    const data = e.currentTarget.dataset;
    const jet = data.jet;

    wx.navigateTo({
      
      url: `/pages/confirmation/confirmation?id=${jet}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
   },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // get the jet data and set to page data
    wx.request({
      url: `https://cloud-suite.herokuapp.com/api/v1/jets/${options.id}`,
      method: "GET",
      success(res) {
        console.log(res)
        const jet = res.data
        that.setData(
          jet
        )
      },
    })
    let userId = wx.getStorageSync("userId")
    this.setData({
      userId: userId
    })
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