import fetch from "axios";

// (async () => {
//   const {data: users } = await fetch("https://jsonplaceholder.typicode.com/users");

//   const {data:post1} =
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ;
//   const {data:post2} =
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ;
//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);

// })();
// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number == 1) resolve("comments");
//     reject("bir hata oluştu");
//   });
// };
// getComments(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    resolve(users);
    // reject("bir hata oluştu");
  });
};

const getpost = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data: users } = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + number
    );
    resolve(users);
  });
};

// (async () => {
//   await getUsers()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));


//   await getpost(19)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// })();

Promise.all([getUsers(),getpost(19)]).then(console.log).catch(console.log);