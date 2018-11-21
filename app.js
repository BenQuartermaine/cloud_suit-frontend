//app.js
App({
  onLaunch: function () {
    const host = 'https://cloud-suite.herokuapp.com/'
    console.log('processing to login')
    wx.login({
      success: (res) => {
        // insert next code here
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          success: (res) => {
            console.log(res)
            let id = { id: res.data.userId}
            wx.setStorageSync("currentUser", id)
          }
        })
      }
    })
  },
  globalData: {}
  
})