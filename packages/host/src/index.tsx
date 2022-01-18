// Use dynamic import here to allow webpack to interface with module federation code
(window as any).actorsUrl = 'http://localhost:3001';
(window as any).moviesUrl = 'http://localhost:3002';

import('./bootstrap');
export {};
