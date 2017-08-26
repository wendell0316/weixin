// inputs_message.js
var app=getApp();
var contents=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents:contents
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var farmWorkSid=options.farmWorkSid
    var that = this;
    var sessionId=app.data.session;
    var companySid=app.data.companySid;
    wx.request({
      url: 'https://www.inteliagpf.cn/api/1.0/ll/enterprice/input/getInputs',
      data: {
        sessionId:sessionId,
        farmWorkSid:farmWorkSid
      },
      header: {},
      method: 'POST',
      dataType: '',
      success: function(res) {
        contents=res.data.comtents
        that.setData({
          contents:contents
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
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