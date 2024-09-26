"use client";
import { useState, useEffect } from 'react';


export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post:{id:number;title:string;content:string;body:string}) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            
            <p>{post.body}</p>
            <br />
            <button onClick={() => {/* implement edit functionality */}}>Edit</button>
            <br />
            <button onClick={() => {/* implement delete functionality */}}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}