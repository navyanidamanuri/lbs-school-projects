 empinfo=[
    {"empno":101,"empname":"elin","job":"manager","lön":30000},
    {"empno":102,"empname":"eliot","job":"programer","lön":28000},
    {"empno":101,"empname":"alfred","job":"tester","lön":20000}
];
 
const javascriptData=JSON.parse(JSON.stringify(empinfo));
console.log(javascriptData);
const empinfo1 = [
    {
        empno: 101,
        empname: "elin",
        job: "manager",
        salary: 30000
    },
    {
        empno: 102,
        empname: "eliot",
        job: "programmer",
        salary: 28000
    },
    {
        empno: 103,
        empname: "alfred",
        job: "tester",
        salary: 20000
    }
];

const jsonData = JSON.stringify(empinfo1);

console.log(jsonData);