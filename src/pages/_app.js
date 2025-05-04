import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

// Add this function at the top of your _app.js file
function handleRedirect() {
  // This script checks if we need to redirect (coming from a GitHub Pages 404 page)
  if (typeof window !== 'undefined') {
    const location = window.location;
    const queryParams = {};
    
    if (location.search) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.forEach((value, key) => {
        queryParams[key] = value;
      });
    }
    
    // If we have a path in the query (from our 404.html redirect)
    if (queryParams.p) {
      const redirectPath = queryParams.p.replace(/~and~/g, '&');
      delete queryParams.p;
      
      const newQueryString = Object.keys(queryParams)
        .map(key => `${key}=${queryParams[key]}`)
        .join('&');
      
      // Replace the current URL with the correct path
      window.history.replaceState(
        null,
        '',
        redirectPath + (newQueryString ? `?${newQueryString}` : '') + location.hash
      );
    }
  }
}

// Then add this line inside your MyApp function, at the top
useEffect(() => {
  handleRedirect();
  // Rest of your existing useEffect code...
}, []);

function MyApp({ Component, pageProps }) {
  // Initialize theme from localStorage on client-side
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.add(theme);
  }, []);

  return (
    <>
      <Head>
        <title>Cosmic Chat</title>
        <meta name="description" content="A stunning, futuristic chat application built with JAMstack architecture" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;   