// function without arguments and without returnvalues
//defining function
function TestFun()
{
    console.log("user difiend function");
}
//function calling
TestFun();
console .log("callin function");
TestFun();
//function with arguments and without return values
 
function TestFunArg(x,y)
{
    console.log("x value is:" +x);
    console.log("y value is:" +y);
}

TestFunArg(10,20);
 
//function with arguments and with return values

function TestFunArgandRetn(x)
{
    let sqr=x**2;
    return sqr;
}

 let  res=TestFunArgandRetn(10);
 console.log("result:" +res);

 // function without arguments and with return value

 function TestFunRetn()
 {
    let x =10;
    let sqr=x**5;
    return sqr;
 }

  console.log(TestFunRetn());let fruits = ["Apple", "Banana", "Mango", "Orange"];
  
  let result = fruits.slice(1, 3);
  
  console.log(result);