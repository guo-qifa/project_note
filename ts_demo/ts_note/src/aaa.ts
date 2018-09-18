// (function () {
// interface bebalVal {
//  label:string;
// }

// function print(labelObj:bebalVal){
//     console.log(labelObj.label);
// }
// let myObj = {size:10,label:"size 10"};
// print(myObj);

// // const OOO = {
// //   print() {}
// // };

// // OOO.print();

// })();

// interface StringArray {
//     [index: number]: string;// index 描述数组下标的类型
// }
   
// var myArray: StringArray;
// myArray = ["Bob", "Fred"];
// console.log(myArray);


// interface StringArray1 {
//     [index: number]: number;// index 描述数组下标的类型
// }
// var myArray1: StringArray1;
// myArray1 = [1,2 ];
// console.log(myArray1);



// let myAdd: (x: number, y: number) => number =
//     function(x: number, y: number): number { return x + y; };

// let myAdd1: (baseValue: number, increment: number) => number =
//     function(x, y) { return x + y; };   
    
// interface SearchFunc {
//         (source: string, subString: string): boolean;
//  }   
// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   console.log(result);
//   return result > -1;
// }
// console.log(mySearch('aaaassssass','ass'))



interface IClock{ 
  currentTime:Date; 
  getTime1(d:Date):Date;
} 
class Time implements IClock{ 
  currentTime:Date = new Date;
  getTime1(d:Date):Date{
    return d 
  } 
}

var times = new Time();
console.log(new Date());
console.log(times.currentTime)
console.log(times.getTime1(new Date()));

// interface ClockStatic {
 
//   new (hour: number, minute: number): Clock1;
// }
   
// class Clock1 {
   
//   currentTime: Date  = new Date;
//   constructor(h: number, m: number) {
//     this.h=h;
//    }
  

//   public h:number;
// }
   
//   var cs: ClockStatic = Clock1; 
//   var newClock = new cs(7, 30);
//   console.log(newClock.h,newClock.currentTime)