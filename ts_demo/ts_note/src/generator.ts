
// function* gen2() {
//     yield 1;
//     yield 2;
// }

// let arr3 = gen2();
// IterableIterator;

// for(const x1 of gen2()){
//     console.log(x1);
// }


interface VV{
   width:number,
   height:number
}
type vvv = Partial<VV>;


class Base {
    hello?(): number { return 3; } 
}

class Child2 extends Base {
    hello?(): 1|2;
}