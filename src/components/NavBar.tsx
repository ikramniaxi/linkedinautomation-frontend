import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { User } from "lucide-react";

const Navbar = () => {
  // Mocking auth state for the UI demo
  const isAuth = false;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl font-display tracking-wider uppercase">
            MeetFlow
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => 
              `text-xs uppercase tracking-widest font-semibold transition-colors ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `text-xs uppercase tracking-widest font-semibold transition-colors ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`
            }>
              About
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => 
              `text-xs uppercase tracking-widest font-semibold transition-colors ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`
            }>
              Pricing
            </NavLink>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {isAuth ? (
            <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-400 hover:text-white transition-colors">
              <User size={16} />
              Account
            </button>
          ) : (
            <Link 
              to="/signin" 
              className="px-6 py-2.5 bg-white text-black text-xs uppercase tracking-widest font-bold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
