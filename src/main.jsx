import React from 'react';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const LazyApp = React.lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="loading-spinner" />}>
      <LazyApp />
    </Suspense>
  </StrictMode>
);