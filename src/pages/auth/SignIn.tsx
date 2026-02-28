import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import AuthLayout from "../../components/AuthLayout";
import type { RootState } from "../../store/store";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuth) return <Navigate to="/dashboard" replace />;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ name: "Laiba", email: "laiba@test.com" }));
    navigate("/dashboard", { replace: true });
  };

  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Sign In</button>
      </form>
      <p className="text-sm text-center mt-4">
        No account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      </p>
      <p className="text-sm text-center mt-2">
        <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
      </p>
    </AuthLayout>
  );
};

export default SignIn;