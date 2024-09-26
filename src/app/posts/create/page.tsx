"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import useAuth from '../../../../hooks/useAuth'; 

export default function CreatePost() {
  useAuth(); // for route protection

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter(); // Initialize useRouter for navigation

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch('/api/posts/create', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    // add in  the posts
    router.push('/posts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Create Post</button>
    </form>
  );
}
