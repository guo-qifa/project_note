// interface Chat{
//     name :string,
//     age : number
// }
class Person {
    constructor(protected value :number = 0){
        
    }
    add(n:number):this{
        this.value += n; 
        return this;
    }
    multiply(m:number):this{
        this.value *= 2;
        return this;
    }
    current():number{
        return this.value;
    }
}

let val = new Person(1).add(1).multiply(2).current();
console.log(val);

class People extends Person {
    constructor( value :number = 0){
        super(value);
    }
    sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}
let v = new People(2).add(1)
        .multiply(5)
        .sin()
        .current();
console.log(v);        
        






















