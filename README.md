微信小程序前端开发学习


B站视频链接： https://www.bilibili.com/video/BV1nE41117BQ?p=1

# 初次提交进度（9-27）
## 1 项目目录结构的准备，导航页

> 列式编程，按住滚轮沿着行滑动，Ctrl+方向键选择列

## 2 轮播图

1. api连接获取，教程：https://github.com/Kotoba209/wx-mall
    - 前往后台管理注册账户信息并登录(https://www.it120.cc/)
    - 登录后台，左侧菜单 “工厂设置” --> “数据克隆” --> “将别人的数据克隆给我”
    - 对方商户ID填写 951
    - 点击 “立即克隆” ，然后退出后台重新登录，然后在左侧菜单的商城管理便可以看到相关数据
    - 连接生成：然后使用api工厂的域名拼接自己的子域名在加上接口地址，就可以访问数据了。如：https://api.it120.cc/maomao64/banner/list

2. 域名请求不合要求的问题：
    - 打开微信开发工具：勾选 详情-本地设置-不校验合法域名
    - 登录微信小程序管理后台：开发-开发设置-服务器域名-添加request合法域名



# 第二次提交（9-28）
## 添加分类导航

>url: https://api.it120.cc/maomao64/shop/goods/category/all

## 添加商品展示（楼层）
>url: https://api.it120.cc/maomao64/shop/goods/list

Chrome Json可视化工具：https://github.com/gildas-lormeau/JSONView-for-Chrome

使用步骤：
1. 下载压缩包，解压
2. 打开Chrome，找到拓展程序，加载已解压的拓展程序：打开到目录，JSONView-for-Chrome-master\WebContent