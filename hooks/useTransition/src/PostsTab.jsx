import React, { useEffect, useState, memo } from "react";

const PostsTab = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setPost(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Log when rendering all posts
  console.log("[ARTIFICIALLY SLOW] Rendering posts");

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <ul className="items">
      {posts.map((post, index) => (
        <SlowPost key={post.id} post={post} index={index} />
      ))}
    </ul>
  );
};

const SlowPost = memo(({ post, index }) => {
  // Artificial delay for each post
  let statTime = performance.now();
  while (performance.now() - statTime < 5) {}

  return (
    <li className="item">
      <strong>Post #{index + 1}</strong>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </li>
  );
});

export default memo(PostsTab);
