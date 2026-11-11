 function TestFun()
{
    console.log("this is userdefiend function");
}
TestFun(); 
function TestFunArg(x,y)
{
    console.log("x value is:" +x);
    console.log("y value is:" +y);
}
TestFunArg(10,20);
function TestFunArgandRetn(x)
{
    let sqr=x**2
    return sqr;
}
let res=TestFunArgandRetn(20);
console.log("result:" +res);

function TestFunRetn()
{
    let x=10;
    let sqr=x**5
    return sqr;
}
let result=TestFunRetn();
console.log(result);