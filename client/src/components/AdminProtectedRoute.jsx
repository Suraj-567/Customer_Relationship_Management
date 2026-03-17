/**
 * AdminProtectedRoute Component
 * ------------------------------
 * A higher-order route guard that protects admin-only pages.
 *
 * Behavior:
 * - Checks for a valid authentication token in localStorage.
 * - Verifies that the user's role is "admin".
 * - If the user is not authenticated or not an admin, they are redirected
 *   to the admin login page ("/admin").
 * - Otherwise, it renders the protected child components.
 */

import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If not logged in or not admin, redirect
  if (!token || role !== "admin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
}
