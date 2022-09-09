const posts = [
  {
    "id": 1,
    "title": "The first post",
    "content": "This is the first post"
  },
  {
    "id": 2,
    "title": "The second post",
    "content": "This is the second post"
  }
];

export default posts;

export type Post = typeof posts[number];
