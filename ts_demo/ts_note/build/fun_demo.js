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
// 抽象类和protected constructor 不能进行实例
var Parent = /** @class */ (function () {
    function Parent(name) {
        if (name === void 0) { name = 'sun'; }
        this.name = name;
        this.name = name;
    }
    Parent.prototype.name1 = function () {
        console.log(this.name + '11111111111111111');
        return this.name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(_age, _ageChild) {
        var _this = _super.call(this, 'sss') || this;
        _this._ageChild = _ageChild;
        _this.conAge = 0;
        _this._ageNum = _age + _ageChild;
        return _this;
    }
    Child.prototype.fullName = function () {
        return this.all('lexue100');
    };
    Child.prototype.childAge = function () {
        return this._ageNum;
    };
    Child.prototype.childName = function () {
        return _super.prototype.name1.call(this);
    };
    Object.defineProperty(Child.prototype, "getAge", {
        get: function () {
            return this.conAge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Child.prototype, "setAge", {
        set: function (num) {
            this.conAge = num;
        },
        enumerable: true,
        configurable: true
    });
    Child.prototype.all = function (funll) {
        if (funll === void 0) { funll = 'lexue'; }
        return funll;
    };
    Child.allName = 'sunchaoxing';
    return Child;
}(Parent));
//let p:Parent = new Parent('sun1');
var c1 = new Child(1, 2);
//console.log(p.name1());
console.log(c1.childAge());
console.log(c1.getAge);
c1.setAge = 10;
console.log(c1.getAge);
console.log(c1.childName());
console.log(c1.fullName());
console.log(Child.allName);
