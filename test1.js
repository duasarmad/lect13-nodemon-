/*Array*/
var students =["usman","ali","Nouman"];
//let searchstudents = students.findIndex(findAli);
//student[5] = "Zeeshan";
//student.sort();
students.splice(1,0,...["Zahid","Anwar"]);

console.log(...students);
function findAli(std){
if(std =="Ali") return true;
else return false;
}