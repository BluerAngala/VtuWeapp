Page({
  data: {
    current: 0,
    type: 1,
    navBarHeight: 0
  },

  navBarLoad: function(e) {
    this.setData({
      navBarHeight: e.detail.navBarHeight
    })
  },

  change: function(e) {
    this.setData({
      current: e.detail.current
    })
  },

  radioChange: function(e) {
    this.setData({
      type: e.detail.value
    })
  },

  alert1: function (e) {
    wx.showToast({
      title: "点击成功" + e.currentTarget.dataset.d,
      icon: 'none',
      duration: 2000
    });
  }
});
