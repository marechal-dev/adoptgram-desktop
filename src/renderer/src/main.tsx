import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import { App } from './App';
import { queryClient } from './lib/react-query';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
