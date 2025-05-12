'use client';
 
import { useEffect } from 'react';
import Link from 'next/link';
 
export default function NotFound() {
  // Add confetti effect when 404 page loads
  useEffect(() => {
    // Import dynamically to avoid SSR issues
    import('canvas-confetti').then((confetti) => {
      confetti.default({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#48dbfb', '#1dd1a1']
      });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Oops! Page Not Found</h1>
      <p className="mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <div className="gif mb-8">
        <div 
          className="gifimg" 
          role="img" 
          aria-label="Animated gif of a cute character looking confused"
        />
      </div>
      <Link 
        href="/" 
        className="answer"
      >
        Back to Home
      </Link>
    </div>
  );
}
