import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold mb-6 text-center">Reset Password</h1>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Enter your email to receive a reset link
      </p>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Send Reset Link
        </button>
      </form>

      <p className="text-sm text-center mt-6">
        <Link to="/signin" className="text-blue-600 hover:underline">
          Back to Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;