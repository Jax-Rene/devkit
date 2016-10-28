# devkit

> 基于Electron、NodeJs 开发的开发者常用工具工具箱。主要集成了开发过程中经常碰到的一些小需求，例如MD5计算、时间戳转换等等。持续更新中。

刚学了点NodeJs，想要找点简单的轮子来造最好还是适合自己学习的。除了简单的利用express搭建的web项目，还有一个很好的框架就是Electron。

VS Code、Atom 等等软件均基于此构建。学习曲线低，官方文档写的清晰，最重要的是跨平台啊！写一次，Windows/MAC/Linux全平台通用。这才是跨平台应用啊（JAVA的跨平台滚粗吧！！！)



## 软件界面

 ![1](README_IMG\1.jpg)



 ![2](README_IMG\2.jpg)



 ![3](README_IMG\3.jpg)



## 构建方法

**需要环境：nodejs v4.0.0以上**

```bath 
git clone https://github.com/iamjohnnyzhuang/devkit.git
cd devkit
#安装依赖
npm install
#打包，结果生成在同目录下的output里
npm run-script package
```



## 现有功能

现有功能比较简单，初次花了一天的时间熟悉以及开发，暂时满足简单使用。

* MD5 加密计算
* URLEncode
* 时间工具
  * 时间戳转换
  * 获取当前时间工具
* 随机工具
  * 随机（小）数工具
  * 随机布尔值获取
  * 随机日期生成
  * 随机字符串生成
* 支持快捷切换(左箭头、右箭头切换tab)



## TODO

1. 重构UI 目前的UI看起来更像是WEB的而不是PC
2. 代码行数分析工具
3. 重构代码架构



