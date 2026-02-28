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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ name: "Laiba", email: "laiba@test.com" }));
    navigate("/dashboard", { replace: true });
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        Sign in to continue.
      </p>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-xs text-gray-400">EMAIL</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-400">PASSWORD</label>
          <input
            type="password"
            placeholder="******"
            className="w-full mt-1 px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Log in
        </button>
      </form>

      <div className="text-center mt-4 space-y-1">
        <Link to="/forgot-password" className="text-sm text-gray-400 hover:underline">
          Forgot Password?
        </Link>
        <p className="text-sm">
          No account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignIn;