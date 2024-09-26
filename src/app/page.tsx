import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the Blog Platform</h1>
      <p>This is a simple blog application where you can create, edit, and delete posts.</p>
      <div>
        <Link href="/auth/signin">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
            Sign In
          </button>
        </Link>
        <Link href="/auth/signup">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
            Sign Up
          </button>
        </Link>
        <Link href="/posts/index">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
            View Posts
          </button>
        </Link>
        <Link href="/posts/create">
          <button style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}>
            View create
          </button>
        </Link>
      </div>
    </div>
  );
}

