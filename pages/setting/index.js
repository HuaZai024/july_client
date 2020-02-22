// pages/setting/index.js
Page({
  data: {

  },

  onLoad() {

  },

  /**
   * 权限页面
   */
  authorize() {
    wx.openSetting({})
  },

  /**
   * 清除缓存
   */
  clearStorage() {
    wx.lin.showDialog({
      type: "confirm",
      title: "提示",
      content: "确定要清除所有缓存？",
      success: (res) => {
        if (res.confirm) {
          wx.clearStorage()
        }
      }
    })
  },

  onShareAppMessage() {
    return {
      title: "主页",
      path: "/pages/topic/index"
    }
  }
})