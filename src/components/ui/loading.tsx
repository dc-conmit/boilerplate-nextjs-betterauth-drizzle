'use client';

import { useEffect } from 'react';
import NProgress from 'nprogress';
import '@/styles/nprogress.css';

// Configure nprogress
NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

export default function Loading() {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
} 