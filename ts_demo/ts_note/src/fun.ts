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

class Greeter {
    static standardGreeting = "Hello, there";
    //greeting: string = '0000000000';
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey1111 there!";
console.log(greeterMaker.standardGreeting);


let greeter2: Greeter = new greeterMaker();
Greeter.standardGreeting = "Hey2222 there!";
console.log(greeterMaker.standardGreeting);
console.log(greeter2.greet());
