import { QueryClientProvider } from '@tanstack/react-query';
import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';

import { App } from './App';
import { queryClient } from './lib/react-query';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PrimeReactProvider>
  </React.StrictMode>,
);
