

// 函数节流
function throttle(fn, threshold) {
  var last;
  var timer;
  threshold || (threshold = 250);
  return function () {
    let context = this;
    let args = arguments;
    var now = +new Date();
    if (last && now < last + threshold) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  }
}
// 函数防抖
function debounce(fn, delay) {
  // 持久化一个定时器
  let timer = null;
  // 闭包函数可以访问timer
  return function () {
    // 通过 this 和 arguments 获得函数的作用域和参数
    let context = this;
    let args = arguments;
    // 如果事件被触发，清除timer并重新开始计时
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay);
  }
}