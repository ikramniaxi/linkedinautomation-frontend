import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../store/authSlice";
import AuthLayout from "../../components/AuthLayout";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ name: "New User", email: "new@test.com" }));
    navigate("/dashboard", { replace: true });
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-center">Create Account</h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        Sign up to get started.
      </p>

      <form onSubmit={handleSignup} className="space-y-4">
        <input className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
        <input className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
        <input className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" />

        <button className="w-full bg-gray-900 text-white py-2 rounded-lg">
          Sign Up
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-600 font-medium">
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;