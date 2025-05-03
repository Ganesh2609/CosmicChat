import { useEffect, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for a better user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-light-200 dark:bg-dark-300">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 font-medium text-primary-500">Loading Cosmic Chat...</p>
        </div>
      </div>
    );
  }

  return <MainLayout />;
}