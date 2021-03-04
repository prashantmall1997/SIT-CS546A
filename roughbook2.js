// const posts = [
//   {
//     title: "Post One",
//     body: "This is post one",
//   },
//   {
//     title: "Post Two",
//     body: "This is post two",
//   },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       console.log(`${post.title}`);
//     });
//   }, 3000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// // getPosts();
// createPost({ title: "Post Three", body: "This is post three" });

const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      console.log(`${post.title}`);
    });
  }, 3000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

async function init() {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
}

init();

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((error) => {
//     console.log("ERROR");
//   });

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Goodbye");
// });

// const promise4 = fetch('')

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
