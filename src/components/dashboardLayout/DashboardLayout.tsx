import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-[1400px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;