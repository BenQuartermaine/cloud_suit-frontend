//app.js
App({
  onLaunch: function () {
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
            let id = { id: res.data.userId}
            // save openid to local storage
            wx.setStorageSync("currentUser", id)
          }
        })
      }
    })
  },
  globalData: {}
  
})