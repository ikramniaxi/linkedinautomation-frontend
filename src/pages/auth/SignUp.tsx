import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../store/authSlice";
import AuthLayout from "../../components/AuthLayout";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ name: "New User", email: "new@test.com" }));
    navigate("/dashboard", { replace: true });
  };

  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Sign Up
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Sign In</Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;