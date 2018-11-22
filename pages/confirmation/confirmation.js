Page({

  data: {
    showModal: false
  },

  confirmation: function () {
    wx.showModal({
      title: 'Successful booking',
      content: 'You have confirmed a booking. We are now redirecting you to your my account page.',
      confirmText: "Great!",
      confirmColor: '#931621',
      showCancel: false,
      success: function (res) {
        wx.switchTab({
          url: '../account/account'
        })
      },
    })
  },

  submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {

  },


  go: function () {
    this.setData({
      showModal: false
    })
  }

})