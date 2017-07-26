### 项目介绍
- 开发环境：windows操作系统
- 开发语言：html+css+jQuery+Ajax
- 开发工具：webstorm+SublimeText
- 责任描述：
  - 使用div+css完成页面布局;
  - 页面有首页、登录和注册、天天特卖、购物车、商品列表、商品详情页等页面;
  - 使用CSS3实现页面的动画效果，提升页面的交互性;
  - 使用ajax实现相同部分(头部和尾部)的复用;
  - 对用户登录注册使用正则表达式进行验证;


### 还未解决的问题
- 很不幸，由于同源策略的影响，ajax无法正常获取数据,必须使用jsonp；
- 而更不辛的是，服务器不在我的控制范围内，无法更改其返回值为携带数据的函数调用；
- 原本异步获取的数据可以被添加到购物车，并使用sessionStorage实现数据存储，在购物车实现商品的增加和删除;
- 如果您有耐心，可以将项目克隆到本地，并使用cmd在项目文件夹中运行`npm run start`在本地查看，不受同源策略影响;
