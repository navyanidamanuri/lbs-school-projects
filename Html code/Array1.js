let x=[10,20,30]
console.log(x);
console.log(x[2]);
let y=["navya",243,12.5,"madhu"]
console.log(y);
for(let i=0;i<3;i++)
{
    console.log(x[i]);
}
let z=[[20,30,40],[50,60,70]]
console.log(z);

for(let n=0; n<2;n++)
{
    console.log(z[n]);
}
let fruits=["orange","banana","apple"]
fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);
let a=[50,20,10]
a.unshift(25);
console.log(a);
a.shift();
console.log(a);
a[2]=35;
console.log(a);
console.log(a.length);
console.log(a.includes(20));
console.log(a.indexOf(20));
let fruit = ["Apple", "Banana", "Mango", "Orange","goa","passon"];

let result = fruit.slice(1, 5);

console.log(result);




