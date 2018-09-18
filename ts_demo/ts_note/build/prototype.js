var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent1 = /** @class */ (function () {
    function Parent1() {
    }
    Parent1.prototype.hello = function () {
        console.log('hello');
    };
    return Parent1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.world = function () {
        console.log('world');
    };
    return Child1;
}(Parent1));
var p1 = new Parent1();
var c10 = new Child1();
// 子= 父
// c10 = p1 as any;
// console.log(c10.hello());
// console.log(c10.world()); // 编译正确，执行错误
//父 = 子
p1 = c10;
console.log(p1.hello()); //hello  undefined
//p1.world(); // 编译error
