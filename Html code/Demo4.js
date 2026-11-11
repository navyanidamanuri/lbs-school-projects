// a function  withou arguments and with out returnvalue
function TestFun()
{
    console.log("calling user defiend function");
}
// function calling
TestFun();
console.log("returning  the user defiend function");
TestFun();
// function with arguments and without return value
function TestFunArg(x,y)
{
    console.log("x value is :" +x);
    console.log("y value is :" +y);
}
TestFunArg(5,10);
TestFunArg("navya","Madhu");

//function with arguments and with return value
function TestFunArgandRetn(x)
{
    let sqr=x**2;
    return sqr;
}
let res=TestFunArgandRetn(10);
console.log("result value is:" +res);

// function without arguments and with return value
function TestFunRetn()
{
let x=10;
let sqr=x**3;
return(sqr);
}
let result=TestFunRetn();
console.log("Result value :" +result);
//function with arguments and without return value
function BigNumer(x,y)
{
    if(x>y)
        console.log(x + "and" + y +"bigvalue is:" +x);
    else
        console.log(x + "and" + y +"bigvalue is:" +y);
}
//function calling
BigNumer(10,5);
BigNumer(10,30);
// function with arguments and with return value
function BigNumer(x,y,z)
{
    if((x>y)&&(x>z))
        return x + " , "+ y +"and" + z  +" bigvalue is:"  +x ;
    else if((y>x)&&(y>z))
     return x + " , "+ y +"and" + z  +" bigvalue is:"  +y ;
    else if((z>x)&&(z>y))
    return x + " , "+ y +"and" + z  +" bigvalue is:"  +z ; 
else
    return "any two numbers are same";   
}
console.log(BigNumer(20,10,5));
