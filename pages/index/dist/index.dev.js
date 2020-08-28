"use strict";

//Page Object
Page({
  data: {
    //轮播数组
    swiperList: [],
    // 分类导航数组
    cateList: [],
    // 楼层数据
    floorList: []
  },
  // 页面加载触发
  onLoad: function onLoad(options) {
    this.getswiperList();
    this.getCateList();
    this.getGoodsList();
  },
  getswiperList: function getswiperList() {
    var _this = this;

    // 发起异步请求，查询轮播数组
    var reqTask = wx.request({
      url: 'https://api.it120.cc/maomao64/banner/list',
      success: function success(result) {
        // console.log(result);
        _this.setData({
          swiperList: result.data.data.slice(3, 6)
        });
      }
    });
  },
  // 获取分类导航
  getCateList: function getCateList() {
    var _this2 = this;

    // 发起异步请求，查询轮播数组
    var reqTask = wx.request({
      url: 'https://api.it120.cc/maomao64/shop/goods/category/all',
      success: function success(result) {
        // console.log(result);
        _this2.setData({
          cateList: result.data.data.slice(0, 6)
        });
      }
    });
  },
  // 获取商品列表
  getGoodsList: function getGoodsList() {
    var _this3 = this;

    // 发起异步请求，查询轮播数组
    var reqTask = wx.request({
      url: 'https://api.it120.cc/maomao64/shop/goods/list',
      success: function success(result) {
        // console.log(result);
        _this3.setData({
          floorList: result.data.data.slice(0, 6)
        });
      }
    });
  }
});