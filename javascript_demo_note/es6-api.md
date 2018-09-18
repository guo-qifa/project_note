# 类数组转数组方法：(遍历器转为数组)
  ## ...[] 和 Array.from([]);
   - [...string.matchAll(regex)]
   - Array.from(string.matchAll(regex))

# 变量的解构赋值
  1. 数组的解构赋值 
   - 数组的元素是按次序排列的，变量的取值由它的位置决定
      let [foo, [[bar], baz]] = [1, [[2], 3]]; foo // 1;  bar // 2;  baz // 3;
  2. 对象的解构赋值
   - 对象的属性没有次序，变量必须与属性名同名，才能取到
      let { baz } = { foo: "aaa", bar: "bbb" };
      baz // undefined

      let { foo: baz } = { foo: "aaa", bar: "bbb" };
      baz // "aaa"
      foo // error: foo is not defined
      上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。

      let x;
      ({x} = {x: 1});  放在一个圆括号里面，就可以正确执行

# 字符串
  1. for .. of ..  可以遍历字符串】
  2. fromCharCode() 用于从码点返回对应字符
   - String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
  3. charAt() 与 at()  
  4. repeat() 表示将原字符串重复n次   'x'.repeat(3) // "xxx"
  5. padStart() padEnd() 
      'x'.padStart(4, 'ab') // 'abax'
      'x'.padEnd(5, 'ab') // 'xabab'
  6. matchAll() 返回一个正则表达式在当前字符串的所有匹配

# 数值的方法
  1. Number.isFinite() 是否为有限的
  2. Number.isInteger() 是否为整数
  3. Math.sign()  判断一个数到底是正数、负数、还是零
  4. Math.trunc() 遇到小数点返回 
# 函数
  1. 函数参数不能在函数内部 let const 
  2. 如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
  3. (function (a, b, c = 5) {}).length // 2 
     这是因为length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。同理，后文的 rest 参数也不会计入length属性。
  4. name 属性 匿名函数也可以获取到
  5. 箭头函数 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
  6. 尾递归的优化 while 将递归转为循环执行
# 数组
  1. es5 克隆数组 concat 
  2. const a1 = [1,2,3,4]; const a2 = [...a1]; const [...a2] = a1;
  3. 扩展运算符还可以将字符串转为真正的数组 [...'hello'] // [ "h", "e", "l", "l", "o" ]
  4. Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
  5. Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
  6. Array.of方法用于将一组值，转换为数组。
  7. 数组实例的 find() 和 findIndex() 
# Set Map 
  Set 主要针对数组
  Map 主要针对对象
# ... 扩展运算符
 1 复制数组
   const a = [1,2];
   const a1 = [...a] // es5 a1 = a
 2 合并数组
   const a = [1,2,3];
   const a1 = [0,...a]; // es5 concat
 3 字符串 转数组
   const str = 'hello';
   const a = [...str];


  
 


# Array.from([1,2,3], callback) 类数组转数组 [].slice.call(obj(this))
  callback 处理转化后的数组
  Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
# Array.of() 将数值转化为数组
  Array() // []
  Array(3) // [, , ,]
  Array(3, 11, 8) // [3, 11, 8]
  参数个数只有一个时，实际上是指定数组的长度

# find  findIndex  filter reduce()
  @parama1 必需。初始值, 或者计算结束后的返回值。
  @parama2 必需。当前元素
  reduce() 

# 对象的扩展
  1. Object.is(parama1, parama2)
    就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
  2. Object.assign(target, source1, source2); 
    const target = { a: 1, b: 1 };
    const source1 = { b: 2, c: 2 };
    const source2 = { c: 3 };
    Object.assign(target, source1, source2);
    target // {a:1, b:2, c:3}
    由于undefined和null无法转成对象，所以如果它们作为参数，就会报错
    如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
  3. 属性遍历  ES6 一共有 5 种方法可以遍历对象的属性。 
    不可枚举：原型属性是不可枚举的，如Object, Array, Number等
    
    (1) for...in
      循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
    (2) Object.keys(obj)
      返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
    (3) Object.getOwnPropertyNames(obj)
      返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
    (4) Object.getOwnPropertySymbols(obj)
      返回一个数组，包含对象自身的所有 Symbol 属性的键名。
    (5) Reflect.ownKeys(obj)
      返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
  4. Object.getOwnPropertyDescriptor(obj)
    返回指定对象所有自身属性（非继承属性）的描述对象。
  5. super 关键字 
    this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。



# proxy 代理器 
  在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
  

# Generator
  es6 诞生以前的异步编程有： 回调函数  事件监听 发布订阅 Promise 对象


# Thunk 转换器


# async 函数
  1. async函数返回一个 Promise 对象，可以使用 then 方法添加回调函数
  2. async函数内部 return 语句返回的值，会成为 then 方法回调函数的参数。
  3. 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。
  4. 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
  5. 第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
  6. 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
  7. 第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。



# * as .. from ..  整体加载模块



export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };

import() 函数 import()返回一个 Promise 对象。
（1）按需加载。
（2）条件加载
（3）动态的模块路径
# Module 的加载实现
  1. 一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。

  2. <script type="module" src="./foo.js"></script>