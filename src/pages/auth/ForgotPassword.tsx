import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold text-center">Reset Password</h1>
      <p className="text-sm text-gray-500 text-center mb-6">
        Enter your email to receive a reset link.
      </p>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="w-full bg-gray-900 text-white py-2 rounded-lg">
          Send Reset Link
        </button>
      </form>

      <p className="text-sm text-center mt-4">
        <Link to="/signin" className="text-blue-600">
          Back to Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;