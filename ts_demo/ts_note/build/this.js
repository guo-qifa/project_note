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
// interface Chat{
//     name :string,
//     age : number
// }
var Person = /** @class */ (function () {
    function Person(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    Person.prototype.add = function (n) {
        this.value += n;
        return this;
    };
    Person.prototype.multiply = function (m) {
        this.value *= 2;
        return this;
    };
    Person.prototype.current = function () {
        return this.value;
    };
    return Person;
}());
var val = new Person(1).add(1).multiply(2).current();
console.log(val);
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    People.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return People;
}(Person));
var v = new People(2).add(1)
    .multiply(5)
    .sin()
    .current();
console.log(v);
