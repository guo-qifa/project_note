// function is_string(x:any): x is string{
//     return typeof x === 'string'; // number string boolean symbol
// }
// var a:any = '123';
// if(is_string(a)){
//     console.log(a.length);
// }
// interface Person {
//     eat();
//     sleep();
// };
// interface Animal {
//     eat();
//     clamp()
// }
// interface Bird {
//     eat();
//     fly();
// }
// function allPet(): Person|Animal|Bird{
//    return 
// }
// var pet = allPet()
// pet.eat();
// function is_animal(pet:Person|Animal|Bird) :pet is Animal{
//     return (<Animal>pet).clamp !== undefined;
// }
// if(is_animal(pet)){
//     pet.clamp();
// }
// interface Padder {
//     getPaddingString(): string
// }
// class SpaceRepeatingPadder implements Padder {
//     constructor(private numSpaces: number) { }
//     getPaddingString() {
//         return Array(this.numSpaces + 1).join(" ");
//     }
// }
// class StringPadder implements Padder {
//     constructor(private value: string) { }
//     getPaddingString() {
//         return this.value;
//     }
// }
// function getRandomPadder() {
//     return Math.random() < 0.5 ?
//         new SpaceRepeatingPadder(4) :
//         new StringPadder("  ");
// }
// // 类型为SpaceRepeatingPadder | StringPadder
// let padder: Padder = getRandomPadder();
// if (padder instanceof SpaceRepeatingPadder) {
//     padder; // 类型细化为'SpaceRepeatingPadder'
// }
// if (padder instanceof StringPadder) {
//     padder; // 类型细化为'StringPadder'
// }
// interface Square {
//     kind: "square";
//     size: number;
// }
// interface Rectangle {
//     kind: "rectangle";
//     width: number;
//     height: number;
// }
// interface Circle {
//     kind: "circle";
//     radius: number;
// }
// interface Triangle {
//     kind: "Triangle";
//     radius: number;
// }
// type Shape = Square | Rectangle | Circle | Triangle;
// function area(s: Shape){
//     switch (s.kind) {
//         case "square": return s.size * s.size;
//         case "rectangle": return s.height * s.width;
//         case "circle": return Math.PI * s.radius ** 2;
//         case "Triangle": return 1 ;
//         default :s;
//     }
// }
// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//     return names.map(n => o[n]);
//   }
//   interface Person {
//       name: string;
//       age: number;
//   }
//   let person: Person = {
//       name: 'Jarid',
//       age: 35
//   };
//   let strings11: string[] = pluck(person, ['name']); // ok, string[]
// console.log(strings11); // [ 'Jarid' ]
// interface Map1<T> {
//     [key: string]: T;
// }
// let keys: keyof Map1<number>; // string
// let value: Map1<number>['foo']; // number
// type Proxy<T> = {
//     get(): T;
//     set(value: T): void;
// }
// type Proxify<T> = {
//     [P in keyof T]: Proxy<T[P]>;
// }
// function proxify<T>(o: T): Proxify<T> {
//    // ... wrap proxies ...
//    return 
// }
// let proxyProps = proxify('props');
