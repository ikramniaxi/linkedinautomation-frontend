import React from "react";
import logo from "../assets/logo.png"; 

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[380px] bg-white rounded-2xl shadow-lg overflow-hidden">
        
        
        <div className="relative h-40 bg-[#111827]">
      
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_#3b82f6_20%,_transparent_20%)] bg-[length:40px_40px]" />
         
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-xl shadow">
              <img src={logo} alt="logo" className="h-8 w-8" />
            </div>
          </div>
        </div>

        
        <div className="p-8 -mt-6 bg-white rounded-t-[40px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;