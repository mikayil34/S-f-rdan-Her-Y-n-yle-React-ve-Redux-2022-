const users = [
  { name: "mehmet", age: 24 },
  { name: "ahmed", age: 22 },
  { name: "murat", age: 15 },
];
console.log(users);
/*
push
map
find
filter
every
includes


*/

// users.push("ayşe");
// users.push("fatma");
// console.log(users);

// users.map((item) => {
//   console.log(item);
// });

// const findIt = users.find((item) => item.name == "mehmet");
// console.log(findIt);
// const findIt2 = users.find((item) => item.age >=20);
// console.log(findIt2);

// const filter= users.filter((item)=>item.age>20 && item.name==="mehmet") 
// console.log(filter);  
// const some= users.some((item)=>item.age<20 ) 
// console.log(some);

//every

// const every= users.every((item)=>item.age > 20  );
// console.log("every "+every);

//ıncludes

const meyveler=["elma","armut","muz"];
const isIncludes= meyveler.includes("muz");

console.log(isIncludes)
const isIncludes1= meyveler.includes("portakal");

console.log(isIncludes1)
