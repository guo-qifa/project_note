class Parent1 {
    hello(){
        console.log('hello')
    }
}

class Child1 extends Parent1 {
    world(){
        console.log('world')
    }
    
}

let p1:Parent1 = new Parent1();

let c10:Child1 = new Child1();

// 子= 父
// c10 = p1 as any;
// console.log(c10.hello());
// console.log(c10.world()); // 编译正确，执行错误

//父 = 子
p1 = c10;
console.log(p1.hello()); //hello  undefined


//p1.world(); // 编译error


