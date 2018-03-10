var key = 'KSYBZ-S3HRD-OPO4I-HU6NO-J6CN2-ISBEU'//获取城市
var hkey ='c6819ccf6dd348af8d5bc8664d92e818'//天气api
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temperature:"4",
    weather:"多云",
    wind:"南风",
    humidity:"69",
    PM:"55",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var lati,longi //定义经度纬度
    var city,district //获得市区信息
    var that=this
    //开始获取经纬度

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        lati = res.latitude.toString()
        longi = res.longitude.toString()
    //经纬度获取成功，开始转为位置   
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + lati + ',' + longi + '&key=' + key,
      success:function(res){
        console.log(res)
        city = res.data.result.ad_info.city
        district = res.data.result.ad_info.district
        that.setData({
          position: " "+city+" "+district
        }) 
        //位置获取成功，开始获取天气
        wx.request({
          url: "https://free-api.heweather.com/s6/weather?" +
           "location="+city+"&" +
          "key="+hkey+ "&" +
          "lang=zh" + "&" +
          "unit=m",
          success:function(res){//开始传递参数
            that.setData({
              imgurl: that.setImg(res.data.HeWeather6[0].now.cond_txt),
              temperature: res.data.HeWeather6[0].now.tmp,
              weather: res.data.HeWeather6[0].now.cond_txt,
              wind:res.data.HeWeather6["0"].now.wind_dir,
              windnum:res.data.HeWeather6["0"].now.wind_sc,
              humidity:res.data.HeWeather6["0"].now.hum,
              feel: res.data.HeWeather6["0"].lifestyle["0"].brf,
              Wea1: res.data.HeWeather6["0"].daily_forecast["0"].cond_txt_d,
              minitmp1: res.data.HeWeather6["0"].daily_forecast["0"].tmp_min,
              maxtmp1: res.data.HeWeather6["0"].daily_forecast["0"].tmp_max,
              Wea2: res.data.HeWeather6["0"].daily_forecast["1"].cond_txt_d,
              minitmp2: res.data.HeWeather6["0"].daily_forecast["1"].tmp_min,
              maxtmp2: res.data.HeWeather6["0"].daily_forecast["1"].tmp_max,
              Wea3: res.data.HeWeather6["0"].daily_forecast["2"].cond_txt_d,
              minitmp3: res.data.HeWeather6["0"].daily_forecast["2"].tmp_min,
              maxtmp3: res.data.HeWeather6["0"].daily_forecast["2"].tmp_max,
              wind1:res.data.HeWeather6["0"].daily_forecast["0"].wind_dir,
              wind2:res.data.HeWeather6["0"].daily_forecast["1"].wind_dir,
              wind3:res.data.HeWeather6["0"].daily_forecast["2"].wind_dir,
              winnum1: res.data.HeWeather6["0"].daily_forecast["0"].wind_sc,
              winnum2: res.data.HeWeather6["0"].daily_forecast["1"].wind_sc,
              winnum3: res.data.HeWeather6["0"].daily_forecast["2"].wind_sc,
            })
            console.log(res)
          }
        })
      }
    })
      }
    })
  },

  setImg:function(weather){
    if(weather=="晴"){
      return "../images/晴.png"
    }
    else if(weather=="雨"){
      return "../images/雨.png"
    }
    else if (weather == "多云") {
      return "../images/多云.png"
    }
    else if (weather == "雪") {
      return "../images/雪.png"
    }
    else if (weather == "多云转晴") {
      return "../images/多云转晴.png"
    }
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