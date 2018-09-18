// class Point {
//     x: number;
//     y: number;
// }
// interface Point3d extends Point {
//     z: number;
// }
// let point3d: Point3d = {x: 1, y: 2, z: 3};
// console.log(point3d.x);
// console.log(point3d.y);
// console.log(point3d.z);
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey1111 there!";
console.log(greeterMaker.standardGreeting);
var greeter2 = new greeterMaker();
Greeter.standardGreeting = "Hey2222 there!";
console.log(greeterMaker.standardGreeting);
console.log(greeter2.greet());
