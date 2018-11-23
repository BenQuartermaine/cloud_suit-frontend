//index.js
//获取应用实例

Page({
  data: {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    location: ['Beijing China Airport', 'Beijing Nanyuan Airport', 'Shenzhen Bao’an International', 'Zhuhai Jinwan Airport', 'Shenzhen Bao’an International', 'Hong Kong International', 'Shanghai Hongqiao International', 'Shanghai Pudong International', 'Hangzhou Xiaoshan International', 'Lijian Sanyi Airport', ' Guangzhou Baiyun International', 'Macau International']

  },

  // bindFormSubmit: function(e) {
  //   console.log(e)

  //   const page = this

  //   const passengers = this.number_of_passengers
  //   const location = this.start
  //   const date = this.start_date
  // },
  clickSearch: function(e) {
    const that = this
    console.log("hahah")
      const passengers = this.data.number_of_passengers
    
      const location = this.data.location[this.data.start]
   
    
      const date = this.data.start_date
    console.log(`https://cloud-suite.herokuapp.com/api/v1/jets?passengers=${passengers}&location=${location}&start_date=${date}`)
    
    wx.request({
      url: `https://cloud-suite.herokuapp.com/api/v1/jets?passengers=${passengers}&location=${location}&start_date=${date}`,
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

  onLoad: function (options) {
    let that = this;
    // when page loads, get the user id & info from local storage and save to page data
    const userId = wx.getStorageSync("userId")
    const userInfo = wx.getStorageSync("userInfo")

    this.setData({
      userId: userId,
      userInfo: userInfo
    })

    // get all the jets information & save to page data
    wx.request({
      url: `https://cloud-suite.herokuapp.com/api/v1/jets`,
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
  bindFromPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      start: e.detail.value
    })
  },
  bindToPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      end: e.detail.value
    })
  },
  bindDatePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      start_date: e.detail.value
    })
  },
  
  bindPassengerPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      number_of_passengers: e.detail.value
    })
  },


  //事件处理函数
  // when click one jet, navigate to show page with jet's id

  showJet(e) {
    console.log(e)
    const data = e.currentTarget.dataset;
    const jet = data.jet;

    wx.navigateTo({
      url: `../show/show?id=${jet.id}`
    });
  }
})
