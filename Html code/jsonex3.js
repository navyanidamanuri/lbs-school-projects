 //single object
  stdinfo={ "rollno":101,"name":"moa" ,"cource":"javscrip"};
  //array form
   const empinfo=[
    {"empno":101,"empname":"navya","emproll":"programer"},
    {"empno":102,"empname":"elin","emproll":" javaprogramer"},
    {"empno":103,"empname":"moa","emproll":".net programer"},
    {"empno":104,"empname":"alfrd","emproll":" python programer"},
    {"empno":105,"empname":"celine","emproll":" javascript programer"}
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
const jsondata=JSON.stringify(empinfo1);
console.log(jsondata);