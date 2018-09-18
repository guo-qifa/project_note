// let num:number = 1;
// console.log(num);
// const num2:number = 2;
// const num3:number = num2*5;
// console.log(num2,num3);

// let ary:any = [{1:1}];
// console.log(ary,ary[0]);
//let arr:number[] = [1,2,3,4]; 
//  let arr:Array<number> = [1,2,3,4]

//  for(const x of arr){
//      console.log(x);
//  }

const enum Color1 {
    red=2,
    green,
    blue
 };
let zh:number = Color1.green;
 console.log(zh);
let arr2:number[] = [1,2,4,5];
for (let i=0;i<arr2.length;i++){
    console.log(i);
}
let num4:number = 1;
let str:string = num4 as any as string;
console.log('sss'+str);

let x:[number,string] = [1,'sun'];
console.log(x[0]);
console.log(x[1]);
let x1:(number|string)[] = ['sun','chao','xing',1,2,2,2];
//x1[5];
console.log(x1[5])

function sun(x2:'sun'|'chao'|'xing'){
if(x2 == 'sun'){ return 1;}
if(x2 == 'chao'){ return 2;}
if(x2 == 'xing'){ return 2;}
return x2;
}
let y: ('sun'|'chao'|'xing') = 'sun';
sun(y);

function arr111(num111:number):number {
  return num111;
}


function * gen() {
    yield 1;
}