# 快速响应的用户界面（定时器）
1 有些浏览器在 js 运行时不会把 UI 更新任务加入队列
2 定时器 处理循环 - 数组 p116
  (1) 处理过程中是否必须同步
  (2) 数据是否必须按顺序处理
  如果两个都是否, 那么就可以用定时器优化循环
  for(var i=0;i<items.length;i++){
    process(items[i]);
  }
  利用定时器如下：
  var todo = items.concat(); 复制数组
  setTimeout( function () {
    process(todo.shift()); 获取数组中第一个元素进行处理
    如果还有元素处理
    if(todo.length > 0){
      setTimeout(arguments.callee, 25);
    }else {
      callback(items);
    }
  },25); 
  * 定时器的最小值为 25毫秒
  * 可以封装成一个函数 function (items,callback){ }
3 如果函数运行时间太长, 可以把每个函数放到数组中，利用上面的方法处理
4 js 可以持续运行的最长时间为 100 毫秒。
  建议： 不要让任何 js 代码持续运行 50 毫秒以上，这样做只是确保代码永远不会影响用户体验
5 当多个重复的定时器同时创建往往会出现性能的问题
  建议创建一个独立的重复定时器，每次执行多个操作  

# 算法和流程控制
1 for while do-while for-in
2 for-in 循环时最慢的循环，
3 减少循环的迭代 操作 items.length(避免)
4 循环的迭代，减少将每个元素都执行一边，用switch 
5 switch比 if 快，如果用 if ，将将最可能出现的条件放在首位
6 递归函数的潜在问题时终止条件不明确或缺少终止条件会导致函数长时间运行，并使用户界面处于假死状态
7 递归容易出错 - 如果数组太长，函数将调用过多；
  利用迭代代替(虽然迭代所用时间长) - 即for 循环

# 编程实践
1 