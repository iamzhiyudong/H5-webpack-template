通过webpack来打包普通的前端项目，用webpack搭建的H5基本开发环境，包括css处理，less支持，rem适配，热更新等
# 1.使用
## 1. 安装依赖
* npm i
## 2. 启动项目
* npm run dev
## 3. 打包项目
* npm run build
# 2.配置的功能
1. webpack-dev-server： 自动打开浏览器、实时预览
2. html-webpack-plugin
3. 解析CSS、Less文件（css-loader、style-loader、postcss-loader）
4. 处理CSS中的URL地址问题（url-loader、 file-loader）
5. 处理高级语法（Babel）
6. 引入rem.js来动态改变根字体大小
7. 引入postcss-potorem将px转换成rem