let posts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." }
];

exports.findAllPosts = () => posts;

exports.findPostById = (id) => posts.find(p => p.id === id);

exports.addPost = (title, content) => {
  const id = posts.length + 1;
  const post = { id, title, content };
  posts.push(post);
  return post;
};