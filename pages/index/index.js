//Page Object
Page({
    data: {
        //轮播数组
        swiperList:[],

        // 分类导航数组
        cateList:[],

        // 楼层数据
        floorList:[]
    },
    // 页面加载触发
    onLoad: function(options){
        this.getswiperList();
        this.getCateList();
        this.getGoodsList();
    },

    getswiperList(){
        // 发起异步请求，查询轮播数组
        var reqTask = wx.request({
            url: 'https://api.it120.cc/maomao64/banner/list',
            success: (result)=>{
                // console.log(result);
                this.setData({
                    swiperList:result.data.data.slice(3, 6)
                })
            }
        });
    },

    // 获取分类导航
    getCateList(){
        // 发起异步请求，查询轮播数组
        var reqTask = wx.request({
            url: 'https://api.it120.cc/maomao64/shop/goods/category/all',
            success: (result)=>{
                // console.log(result);
                this.setData({
                    cateList:result.data.data.slice(0, 6)
                })
            }
        });
    },

    // 获取商品列表
    getGoodsList(){
        // 发起异步请求，查询轮播数组
        var reqTask = wx.request({
            url: 'https://api.it120.cc/maomao64/shop/goods/list',
            success: (result)=>{
                // console.log(result);
                this.setData({
                    floorList:result.data.data.slice(0, 6)
                })
            }
        });
    }

    
});