// interface Shape {
//     color: string;
// }
// interface Square extends Shape {
//     sideLength: number;
// }
// var square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// 约束泛型
// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }
// console.log(loggingIdentity([1,2,3,4]).length);
//泛型类
// class GenericNumber<T> {
//     zeroValue: T ;
//     add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
// 
// class BeeKeeper {
//     hasMask: boolean = false;
// }
// class ZooKeeper {
//     nametag: string ;
// }
// class Animal {
//     numLegs: number;
// }
// class Bee extends Animal {
//     keeper: BeeKeeper;
// }
// class Lion extends Animal {
//     keeper: ZooKeeper;
// }
// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }
// console.log(createInstance(Lion).keeper.nametag); 
// console.log(createInstance(Bee).keeper.hasMask);   
// 函数参数双向协变
// 所有声明必须具有相同的修饰符 变量冲突
// enum EventType { 
//     Mouse, 
//     Keyboard 
// }
// interface Event { 
//     timestamp: number; 
// }
// interface MouseEvent1 extends Event { 
//     x: number; 
//     y: number 
// }
// interface KeyEvent extends Event { 
//     keyCode: number 
// }
// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//     /* ... */
// }
// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent1) => console.log(e.x + ',' + e.y));
// // Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent1>e).x + ',' + (<MouseEvent1>e).y));
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent1) => console.log(e.x + ',' + e.y)));
// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));
