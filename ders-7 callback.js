// setTimeout(() => {
// console.log("merhaba");
// }, 5000);
// setInterval(()=>{
//     console.log("merhaba her saniye çalışırım");

// },1000);
// const sayHi=(cb)=>{

//     cb();
// };
// sayHi(()=>{
//     console.log("hello");

// });
import fetch from "node-fetch";
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>data.json() )
// .then((users)=>{

// });

// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// }
// getData();
(async ()=>{
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
    
      const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
      ).json();
      const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
      ).json();
      console.log("users", users);
      console.log("post1", post1);
      console.log("post2", post2);

})();