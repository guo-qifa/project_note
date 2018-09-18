// 抽象类和protected constructor 不能进行实例
 abstract class Parent {
    //private name:string = 'sun';
    protected _age:number;
    protected constructor(private name:string = 'sun') {
        this.name = name;
    }
    public name1():string{
        console.log(this.name+'11111111111111111');
        return this.name;
    }
    abstract fullName():void;
}
class Child extends Parent{
    //private _ageChild:number;
    private _ageNum:number;
    
    constructor(_age:number,private _ageChild:number) {
        super('sss');
        this._ageNum = _age +_ageChild;

    }
    public fullName():string{
        return this.all('lexue100');
    }
    public childAge():number{
        return this._ageNum;
    }
    public childName():string{
       return super.name1();
    }
    public get getAge():number{
        return this.conAge;
    }
    public set setAge(num:number){
         this.conAge = num;
    }
    private conAge:number = 0;
    private all(funll:string='lexue'):string{
        return funll;
    }

    static allName:string = 'sunchaoxing'

}
//let p:Parent = new Parent('sun1');
let c1:Child = new Child(1,2);

//console.log(p.name1());
console.log(c1.childAge());
console.log(c1.getAge);
c1.setAge =10;
console.log(c1.getAge);
console.log(c1.childName());
console.log(c1.fullName());
console.log(Child.allName);







