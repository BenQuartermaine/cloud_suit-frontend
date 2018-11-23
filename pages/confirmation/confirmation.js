Page({

  data: {
    showModal: false
  },
  // picker for start & end date
  bindStartDateChange: function (e) {
    this.setData({
      start_date: e.detail.value,
    })

    const data = this.data
    let total_price = 0
    if (data.end_date) {
      let dend = new Date(data.end_date).getTime()
      let dstart = new Date(data.start_date).getTime()
      console.log(data.price_jet)
      total_price = data.price_jet * (dend - dstart) / 86400000
    }
    this.setData({
      total_price: total_price
    })
  },

  bindEndDateChange: function (e) {   
    this.setData({
      end_date: e.detail.value,
    })

    const data = this.data
    let total_price = 0
    if (data.start_date) {
      let dend = new Date(data.end_date).getTime()
      let dstart = new Date(data.start_date).getTime()
      total_price = data.price_jet * (dend - dstart) / 86400000
    }
    this.setData({
      total_price: total_price
    })
  },
// Modal pop up on successful booking
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
  onLoad: function (options) {
    const page = this
    // when page loads, get the user id & info from local storage and save to page data
    const userId = wx.getStorageSync("userId")
    const userInfo = wx.getStorageSync("userInfo")

    this.setData({
      userId: userId,
      userInfo: userInfo
    })

    wx.request({
      url: `https://cloud-suite.herokuapp.com/api/v1/jets/${options.id}`,
      method: "GET",
      success(res) {
        console.log(res)
        const jet = res.data
        page.setData(
          jet
        )
      }
    })
    console.log(this.data)
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
  },


  // New Restaurant Submission
  bindFormSubmit: function (e) {
    let that = this
    console.log(this.data)
    let r = {
      user: {
        id: this.data.userId
      },
      reservation: {
        start_date: this.data.start_date,
        end_date: this.data.end_date,
        total_price: this.data.total_price
      }

      // }
    }
    console.log(r)
    // Get api data
    wx.request({
      url: `https://cloud-suite.herokuapp.com/api/v1/jets/${that.data.id}/reservations`,
      method: 'POST',
      data: r,
      success() {
        // set data on index page and show
        wx.redirectTo({
          url: '/pages/account/account'
        },
        );
      }
    })
  },
})