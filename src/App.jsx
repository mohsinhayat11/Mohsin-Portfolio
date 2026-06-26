import { Routes, Route } from "react-router-dom";

import Portfolio from "./Portfolio";
import AdminLogin from "./pages/AdminLogin";
import AdminMessages from "./pages/AdminMessages";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Portfolio */}
      <Route path="/" element={<Portfolio />} />

      {/* Admin Login */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin/messages"
        element={
          <ProtectedRoute>
            <AdminMessages />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;