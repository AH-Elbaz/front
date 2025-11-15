import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <Link href="/"
        className="bg-lime-500 text-black font-bold rounded-xl px-8 py-4 text-lg shadow-lg hover:shadow-lime-500/50 hover:scale-105 transition-all duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
}
