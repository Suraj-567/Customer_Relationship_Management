/**
 * EmployeeLogin Component
 * -----------------------
 * This component provides the login interface for employees.  
 * It handles authentication, form state management, API communication,
 * and redirects employees to their dashboard after successful login.
 *
 * Key Features:
 * -------------
 * ✔ Supports email + password authentication  
 * ✔ Uses Axios to call the backend employee login API  
 * ✔ Stores JWT token & user metadata in localStorage (token, role, name, companyId)  
 * ✔ Shows real-time notifications using react-hot-toast  
 * ✔ Has a loading spinner and disables UI while processing  
 * ✔ Provides a polished UI using TailwindCSS and Lucide icons  
 *
 * State Variables:
 * ----------------
 * - email → Employee email input
 * - password → Employee password input
 * - loading → Prevents multiple submissions & changes button state
 *
 * Authentication Flow:
 * --------------------
 * 1. User submits the login form  
 * 2. The component sends POST request → /api/auth/employee  
 * 3. On success:
 *      • Saves token, role, employee name, and companyId to localStorage  
 *      • Shows success toast  
 *      • Redirects employee to /employee-layout/dashboard  
 * 4. On failure:
 *      • Shows error toast with backend message  
 *
 * UI & Layout:
 * ------------
 * - Dark gradient background with centered login card
 * - Icon-enhanced input fields (email + password)
 * - Loading animation (Loader2) during API calls
 * - Footer link for Business Managers to access the main login page
 *
 * Purpose:
 * --------
 * This screen is used exclusively by employees to log in and access
 * their dedicated employee dashboard and assigned ticket system.
 */





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// --- ENHANCEMENT: Import icons
import { User, Mail, Lock, Loader2 } from "lucide-react";
// --- ENHANCEMENT: Import toast
import toast from "react-hot-toast";

export default function EmployeeLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // --- ENHANCEMENT: Removed custom toast state
  // --- ENHANCEMENT: Added loading state
  const [loading, setLoading] = useState(false);

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const { data } = await axios.post("http://localhost:5001/api/auth/employee", {
      email,
      password,
    });

    // ✅ Store token & role
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("name", data.name);
    localStorage.setItem("companyId", data.companyId);

    toast.success("✅ Employee login successful!");
    navigate("/employee-layout/dashboard");

  } catch (err) {
    toast.error(err.response?.data?.message || "❌ Login failed!");
  }
  

  setLoading(false);
};


  // --- ENHANCEMENT: Removed custom toast useEffect

  return (
    <div className="flex fixed inset-0 items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-4">
      
      {/* --- ENHANCEMENT: Removed custom toast div */}

      {/* Login Card */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10 transition-all duration-300"
      >
        {/* --- ENHANCEMENT: Title with icon */}
        <div className="flex flex-col items-center mb-6">
          <div className="p-3 bg-green-600/20 rounded-full mb-3">
            <User className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-100">
            Employee Login
          </h2>
          <p className="text-center text-sm text-gray-400 mt-2">
            Access your employee dashboard
          </p>
        </div>

        {/* --- ENHANCEMENT: Email with icon */}
        <div className="relative space-y-6">
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Employee Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="border border-gray-700 w-full p-3 pl-11 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>

          {/* --- ENHANCEMENT: Password with icon */}
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="border border-gray-700 w-full p-3 pl-11 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>

          {/* --- ENHANCEMENT: Submit Button with loading state */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              "Login as Employee"
            )}
          </button>
        </div>

        {/* --- ENHANCEMENT: Footer link to /login */}
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">Are you a Business Manager?</p>
          <Link
            to="/login"
            className="inline-block w-full sm:w-auto mt-3 px-6 py-2.5 rounded-lg font-medium text-white bg-gray-700/60 border border-gray-600 hover:bg-gray-700 transition-all duration-200"
          >
            Login Here
          </Link>
        </div>
      </form>
    </div>
  );
}