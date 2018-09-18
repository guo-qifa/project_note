# I/O密集的地方尽量不要使用 require (同步)；
 - 数组 unshift 返回索引，原数组不变
 - 数组 shift 返回数组的值，元素组改变
 - 数组 splice(n, m) 返回一个新数组(剪切的值)， 原数组改变


# 利用匿名函数处保留全局变量
  function async(cb) {
    setTimeout(cb, 200)
  };
  var color = 'blue';
  (function (color){
    console.log('coloe is ' + color)
  })(color);
  color = green;
# 串行化流程控制
 将几个异步任务按顺序执行，需要把这些任务按预期的执行顺序放到数组中

# querystring
# require 模块
# 第五章 存储 Node 程序中的数据
 - 最低级、最简单的存储 - 无服务器的数据存储
  1. 内存存储
  2. 基于文件存储

 - NoSQL
  3. redis 处理简单、不需要长期访问的数据存储
  4. mongoose 
  5. mongoDB

# Connect 可以直接套用到更高级的 Express框架上
  - next() 不调用 next 时，可以判断权限，有权限 next()