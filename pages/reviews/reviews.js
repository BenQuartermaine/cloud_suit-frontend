// pages/reviews/reviews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reviews: ["💛", "💛💛", "💛💛💛", "💛💛💛💛", "💛💛💛💛💛"],
  },
  
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync("userInfo");
    this.setData({
      avatarUrl: userInfo.avatarUrl
    });

    // in_xin: function(e) {
    //   var in_xin = e.currentTarget.dataset.in;
    //   var one_2;
    //   if (in_xin === 'use_sc2') {
    //     one_2 = Number(e.currentTarget.id);
    //   } else {
    //     one_2 = Number(e.currentTarget.id) + this.data.one_2;
    //   }
    //   this.setData({
    //     one_2: one_2,
    //     two_2: 5 - one_2
    //   })
    // };

   
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