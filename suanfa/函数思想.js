

/** 纯函数 */
// 纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

// 不纯的
var minimum = 21;
var checkAge = function(age) {
  return age >= minimum;
};

// 纯的
var checkAge = function(age) {
  var minimum = 21;
  return age >= minimum;
};

/**
 * 使用纯函数的形式，函数就能做到自给自足。
 * 我们也可以让 minimum 成为一个不可变（immutable）对象，
 * 这样就能保留纯粹性，因为状态不会有变化。要实现这个效果，
 * 必须得创建一个对象，然后调用 Object.freeze 方法：
 */

var immutableState = Object.freeze({
  minimum: 21
});






/** 代码组合 */
// 1. compose的参数是函数，返回的也是一个函数

// 2. 因为除了第一个函数的接受参数，其他函数的接受参数都是上一个函数的返回值，
//    所以初始函数的参数是多元的，而其他函数的接受值是一元的

// 3. compsoe函数可以接受任意的参数，所有的参数都是函数，且执行方向是自右向左的，
//    初始函数一定放到参数的最右面

// 函数组合 => 从右向左 执行的核心
var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};

/** 声明式代码 */


// 命令式
var authenticate = function(form) {
  var user = toUser(form);
  return logIn(user);
};
// 声明式
var authenticate = compose(logIn, toUser);
// 命令式
var makes = [];
for (i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}
// 声明式
var makes = cars.map(function(car){ return car.make; });

/** 柯里化 */


// 只传递函数一部分参数来调用它，让它韩慧一个函数去处理剩下的参数

// =================================  container  ======

var Container = function (x) {
  this.__value = x;
}
Container.of = function (x) { return new Container(x); };

Container.of(Container.of({ name: "yoda" }));
Container.of(2).map(function (two) { return two + 2 });


console.log(Container);


var Maybe = function(x) {
  this.__value = x;
}

Maybe.of = function(x) {
  return new Maybe(x);
}

Maybe.prototype.isNothing = function() {
  return (this.__value === null || this.__value === undefined);
}

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

Maybe.of("Malkovich Malkovich").map(match(/a/ig));
//=> Maybe(['a', 'a'])

Maybe.of(null).map(match(/a/ig));
//=> Maybe(null)

Maybe.of({name: "Boris"}).map(_.prop("age")).map(add(10));
//=> Maybe(null)

Maybe.of({name: "Dinah", age: 14}).map(_.prop("age")).map(add(10));
//=> Maybe(24)



console.log(Maybe);



