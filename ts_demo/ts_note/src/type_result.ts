
// 通用类型
let xy = [0, 1, 'ss'];


// window.onmousedown = function(mouseEvent) {
//     console.log(mouseEvent.button);  //<- Error
// };

// window.onmousedown = function(mouseEvent: any) {
//     console.log(mouseEvent.button);  //<- Now, no error is given
// };

// 类型兼容
// 常量
interface Named {
    name: string;
}
let star: Named;
let y2 = { name: 'Alice', location: 'Seattle' };
star = y2;
console.log(star);
// 函数

let x2 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;

y1 = x2; // OK
// x2 = y1; // Error


