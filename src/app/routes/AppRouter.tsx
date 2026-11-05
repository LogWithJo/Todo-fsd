import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// The app layer is allowed to import from pages
import { TodoPage } from '../../pages/todo-page';
import AuthForm from '../../pages/auth-page/ui/AuthForm';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/auth" element={<AuthForm />} />

        {/* Redirect root to our todos page for this example */}
        <Route path="*" element={<Navigate to="/todos" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
