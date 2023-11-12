import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './lib/react-query';
import './styles/global.css';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main></main>
    </QueryClientProvider>
  );
}
