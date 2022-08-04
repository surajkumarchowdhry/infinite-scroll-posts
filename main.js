let limit = 3;
let page = 1;

async function getPosts() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = response.json();

  return data;
}

async function showPosts() {
  const posts = await getPosts();
  console.log(posts);
}

showPosts();
