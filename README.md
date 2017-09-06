# 环境搭建

## 1.npm install

安装环境启动所需的依赖包，以保证webpack配置文件中引入的相关依赖或者库能够获取到

## 2.安装sass

依次安装 [ruby](https://www.ruby-lang.org/zh_cn/documentation/installation/ )，sass本身只是个编译器，compass在它的基础上封装了一系列的模块和模板，补充了sass功能；而compass是ruby语言开发，so 安装ruby不能舍。

安装compass 

sudo gen install compass windows系统去掉sudo即可，安装完成记得先检测下，ruby -v，compass -v，sass -v

## 3.启动npm 命令

npm run build;

npm run start;

npm run sass-watch