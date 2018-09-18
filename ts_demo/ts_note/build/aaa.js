// (function () {
// interface bebalVal {
//  label:string;
// }
var Time = /** @class */ (function () {
    function Time() {
        this.currentTime = new Date;
    }
    Time.prototype.getTime1 = function (d) {
        return d;
    };
    return Time;
}());
var times = new Time();
console.log(new Date());
console.log(times.currentTime);
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
