 // pages/list/list.js

const app = getApp()
const AV = require('../../utils/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

    tempFilePaths: "/images/upload.png",
    multiArray: [['Avro RJ70', 'Beechjet 400A', 'Premier 1'], ['Boeing', 'Beechcraft', 'Cesna', 'Gulfstream']],
    location: ['Beijing China Airport', 'Beijing Nanyuan Airport', 'Shenzhen Bao’an International', 'Zhuhai Jinwan Airport', 'Shenzhen Bao’an International', 'Hong Kong International', 'Shanghai Hongqiao International', 'Shanghai Pudong International', 'Hangzhou Xiaoshan International', 'Lijian Sanyi Airport', ' Guangzhou Baiyun International', 'Macau International']

  },

  imageClicked: function() {
    var page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        page.setData({
          tempFilePaths: res.tempFilePaths
        }) 
      }
    })
  },

  bindFormSubmit: function (e) {
    //upload pics to LeanCloud
    const page = this
      new AV.File('file-name', {
        blob: {
          uri: this.data.tempFilePaths[0],
        },
      }).save().then(
        function(file) {
          //got url from LeanCloud
          console.log(file.url())
    // get user id from local storage

          let userId = wx.getStorageSync("userId")
          const userInfo = wx.getStorageSync("userInfo")
          let user = {
            user: {
              id: userId
            }
          }

          let jet = {
      // get user input from 'e', get picker data from page data
            model: page.data.multiArray[0][page.data.multiIndex[0]],
            manufactory: page.data.multiArray[1][page.data.multiIndex[1]],
            location: page.data.location[page.data.index],
            capacity_of_passengers: e.detail.value.capacity_of_passengers,
            price_jet: e.detail.value.price_jet,
            available_start_date: page.data.start_date,
            available_end_date: page.data.end_date,
            photo: file.url(),
            avatarurl: userInfo.avatarUrl
          }
          // wrap user and submission data as an object
          let request = Object.assign(user, jet)

          wx.request({
            url: 'https://cloud-suite.herokuapp.com/api/v1/jets',
            method: 'POST',
            data: request,
            success(res) {
              // get api response with jet's id, to navigateTo show page
              wx.navigateTo({
                url: `/pages/show/show?id=${res.data.id}`
              });
            }
          });
        }).catch(console.error)
  },
  // picker for start & end date
  bindStartDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      start_date: e.detail.value
    })
  },

  bindEndDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      end_date: e.detail.value
    })
  },
  // picker for model & manufacture
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  // picker for location
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

  

 
