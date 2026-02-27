import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      {children}
    </div>
  );
};

export default AuthLayout;