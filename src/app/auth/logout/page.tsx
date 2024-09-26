import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/auth/signin');
  };

  return <button onClick={handleLogout}>Log Out</button>;
}