//index.js
//获取应用实例

Page({
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
      url: "../index/index"
    });
  },
  
  showJet(e) {
    console.log(e)
    const data = e.currentTarget.dataset;
    const jet = data.jet;

    wx.navigateTo({
      url: `../show/show?id=${jet.id}`
    });
  }
})
