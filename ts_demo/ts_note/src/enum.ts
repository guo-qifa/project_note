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
enum EventType0 { Mouse, Keyboard }

interface Event0 { timestamp: number; }
interface MouseEvent0 extends Event0 { x: number; y: number }
interface KeyEvent0 extends Event0 { keyCode: number }
function listenEvent(eventType: EventType0.Mouse, handler: (n: MouseEvent0) => void);
function listenEvent(eventType: EventType0.Keyboard, handler: (n: KeyEvent0) => void);


function listenEvent(eventType: EventType0, handler: (n: any) => void) {
    /* ... */
    let mouseEvent22:MouseEvent0 = {
            x:1,
            y:2,
            timestamp:3
    }
    console.log(eventType);
    handler(mouseEvent22);
}

listenEvent(EventType0.Mouse,(e)=>{
   console.log(e.x);
});




