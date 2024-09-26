"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const user = localStorage.getItem(email);
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.password === password) {
        localStorage.setItem('loggedInUser', email);
        router.push('/posts');
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('User not found');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
