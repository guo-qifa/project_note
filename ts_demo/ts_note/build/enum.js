// enum Response1 {
//     No = 0,
//     Yes = 1,
// }
// function respond(recipient: string, message: Response1): void {
//     // ...
//     console.log(recipient ,message);
// }
// respond("Princess Caroline", Response1.Yes);
// enum E {
//     X, Y, Z
// }
// function f(obj: { X: number }) {
//     return obj.X;
// }
// console.log(f(E));
// 外部枚举的用途
// declare enum Enum {
//     A = 1,
//     B,
//     C = 2
// }
// console.log(Enum.A,Enum.B,Enum.C);
var EventType0;
(function (EventType0) {
    EventType0[EventType0["Mouse"] = 0] = "Mouse";
    EventType0[EventType0["Keyboard"] = 1] = "Keyboard";
})(EventType0 || (EventType0 = {}));
function listenEvent(eventType, handler) {
    /* ... */
    var mouseEvent22 = {
        x: 1,
        y: 2,
        timestamp: 3
    };
    console.log(eventType);
    handler(mouseEvent22);
}
listenEvent(EventType0.Mouse, function (e) {
    console.log(e.x);
});
