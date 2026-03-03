
import { BellDot, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-zinc-100 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex flex-col">
        <h1 className="text-xl font-display uppercase tracking-tight text-zinc-900 leading-tight">
          Dashboard
        </h1>
        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
          Overview & performance
        </span>
      </div>

      <div className="hidden lg:block w-[400px]">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            placeholder="Search campaigns, analytics..."
            className="w-full pl-11 pr-4 py-3 text-xs uppercase tracking-widest font-bold rounded-xl border border-zinc-100 bg-zinc-50 
            focus:bg-white focus:ring-2 focus:ring-zinc-900 outline-none transition-all placeholder:text-zinc-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-3 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
          <BellDot size={20} className="text-zinc-600" />
          <span className="absolute top-3 right-3 h-2 w-2 bg-zinc-900 rounded-full border-2 border-white" />
        </button>
        
        <div className="h-10 w-10 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-widest">
          LA
        </div>
      </div>
    </header>
  );
};

export default Header;
