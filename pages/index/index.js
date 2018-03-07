var key = 'KSYBZ-S3HRD-OPO4I-HU6NO-J6CN2-ISBEU'//地图密钥key
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var lati,longi
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        lati = res.latitude.toString()
        longi = res.longitude.toString()
      }
    })
    console.log(lati)
    var url = 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + lati + ',' + longi + '&key='+key
    console.log(url)
    // wx.request({
    //   url: url,
    //   success:function(res){
    //     console.log(res)  
    //   }
    // })
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