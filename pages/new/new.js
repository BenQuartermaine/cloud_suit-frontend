// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: "/images/upload.png"
    
  },

  buttonClicked: function () {
    var page = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        page.setData({ tempFilePaths })
      }
    })
  },

  bindFormSubmit: function (e) {
    let currentUser = wx.getStorageSync("currentUser")
    let user = {
      user: {
        id: currentUser.id
      }
    }
    let jet = {
      model: e.detail.value.model,
      manufactory: e.detail.value.manufactory,
      location: e.detail.value.location,
      capacity_of_passengers: e.detail.value.capacity_of_passengers
    }
    let request = Object.assign(user, jet)

    //Get api data
    wx.request({
      url: 'https://cloud-suite.herokuapp.com/api/v1/jets',
      method: 'POST',
      data: request,
      success() {
        // set data on index page and show
        wx.switchTab({
          url: '/pages/index/index'
        });
      }
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
  
  }

})

  
