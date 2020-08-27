//Page Object
Page({
    data: {
        //轮播数组
        swiperList:[]
    },
    // 页面加载触发
    onLoad: function(options){
        // 发起异步请求，查询轮播数组
        var reqTask = wx.request({
            url: 'https://api.it120.cc/maomao64/banner/list',
            success: (result)=>{
                console.log(result);
                this.setData({
                    swiperList:result.data.data
                })
            }
        });
    }
});