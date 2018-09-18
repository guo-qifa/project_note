// 通用类型
var xy = [0, 1, 'ss'];
var star;
var y2 = { name: 'Alice', location: 'Seattle' };
star = y2;
console.log(star);
// 函数
var x2 = function (a) { return 0; };
var y1 = function (b, s) { return 0; };
y1 = x2; // OK
// x2 = y1; // Error
