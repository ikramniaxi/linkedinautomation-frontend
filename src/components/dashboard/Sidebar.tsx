
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LayoutDashboard,
  Megaphone,
  BarChart3,
  LogOut,
  LineChart,
} from "lucide-react";
import { logout } from "../../store/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
      isActive
        ? "bg-white text-black"
        : "text-zinc-500 hover:text-white hover:bg-white/5"
    }`;

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/", { replace: true }); 
  };

  return (
    <aside className="w-72 bg-zinc-950 text-white flex flex-col border-r border-white/5">
      <div className="h-20 flex items-center px-8 text-lg font-display uppercase tracking-widest border-b border-white/5">
        LinkedIn<span className="text-zinc-500">Auto</span>
      </div>

      <nav className="flex-1 py-8 space-y-1">
        <NavLink to="/dashboard" end className={linkClass}>
          <LayoutDashboard size={16} />
          Overview
        </NavLink>

        <NavLink to="/dashboard/campaigns" className={linkClass}>
          <Megaphone size={16} />
          Campaigns
        </NavLink>

        <NavLink to="/dashboard/analytics" className={linkClass}>
          <BarChart3 size={16} />
          Analytics
        </NavLink>

        <NavLink to="/dashboard/graphs" className={linkClass}>
          <LineChart size={16} />
          Insights
        </NavLink>
      </nav>

      <div className="p-6 border-t border-white/5">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-red-400 transition-all rounded-xl hover:bg-red-500/5"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
