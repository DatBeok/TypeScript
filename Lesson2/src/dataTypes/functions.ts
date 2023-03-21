//1. Function declaration (Khai bao ham)
function fun1(){
    // Hoisting
    console.log("fun1");
}

const fun2 = function(){
    console.log("func2");
}

const fun3 = ()=>{
    console.log("func3");
}

//2. Function return
let num1: number;
//  function sum():number {
//     return;
//  }

//  function showName():string{
//     return;
//  }

 function logger():void{
    console.log("Them moi thanh cong");
 }

 function showError():never{
    const error =new Error("Something went wrong!!!");
    throw error;
 }

 // const err = showError();

 //3.Function parameter
 function sum(a:number, b:number=0):number{
    return a+b;
 }
 console.log(sum(10,-1));

 function showName(): string{
    return "";
 }

 //4. Rest parameter
  const showClasses =function(name:string,...classes:string[]):string{
    return `Student ${name} is studying ${classes.join(", ")}`;
  }
  console.log(showClasses("DatBe","Math","Physics","Chemistry"));
  
 //5.Callback
//  const numArr = [5,10,15,20];

//  const result = numArr.map((item)=>{
//     return item *2;
//  });
//  console.log(result);
 
// const we17305_map = function(arr:number[],callback?: (item:number)=>number){
//     const temp:number[] = [];
//     for(let i = 0; i <arr.length;i++){
//         const newItem = callback(arr[i]);
//         temp.push(newItem);
//     }
//     return temp;
// }
// const result = we17305_map(numArr,(item)=>{
//     return item *2;
// })
// console.log(result);
