import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LayoutDashboard,
  Megaphone,
  BarChart3,
  LogOut,
} from "lucide-react";
import { logout } from "../../store/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/", { replace: true }); 
  };

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="h-16 flex items-center px-6 text-xl font-bold">
        Meet<span className="text-indigo-500">Flow</span>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        <NavLink to="/dashboard" end className={linkClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/campaigns" className={linkClass}>
          <Megaphone size={18} />
          Campaigns
        </NavLink>

        <NavLink to="/dashboard/analytics" className={linkClass}>
          <BarChart3 size={18} />
          Analytics
        </NavLink>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-lg"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;