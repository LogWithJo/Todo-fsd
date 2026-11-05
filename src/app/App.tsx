import { QueryProvider } from './provider/QueryProvider';
import { AppRouter } from './routes/AppRouter';
// Import global styles here (e.g., import './styles/global.css')

export function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}
