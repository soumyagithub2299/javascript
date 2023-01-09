var Students =[
    { Name:"soumy", age: 23, Course: "MCA" },
    { Name:"ganesh", age: 24, Course: "manager" },
    { Name:"ankush", age: 22, Course: "developer" },
    { Name:"shyam", age: 40, Course: "mba" },
    { Name:"raju", age: 38, Course: "ITUS" },
    { Name:"babu bhaiya", age: 58, Course: "doctor" },
    { Name:"vasooli", age: 36, Course: "don" },
    { Name:"gopal", age: 28, Course: "CE" },
    { Name:"virat", age: 33, Course: "cricket" },
    { Name:"Rajesh", age: 39, Course: "MTech" },
    { Name:"Pradeep", age: 48, Course: "BTech" },
]

for (let Student of Students){
    let name = Student.Name;
    console.log("Using for of loop Name := "+name);
}


for (let Student in Students) {
  let text = Students['Name'];
  // console.log("Using for in loop Name := "+text);
  console.log(text);
}



// for (let index = 0; index < Students.length; index++) {
//     const element = Students[index];
//     console.log(element.Name);
    
// }
 
// Students.map((e,index,arr)=>{
// console.log(e.Name,"map method used here");
// })