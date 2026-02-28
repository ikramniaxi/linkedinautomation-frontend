import { BellDot, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 bg-white/90 backdrop-blur border-b flex items-center justify-between px-6 sticky top-0 z-40">
      
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-indigo-700 leading-tight">
          Dashboard
        </h1>
        <span className="text-xs text-gray-400">
          Overview & performance
        </span>
      </div>

     
      <div className="hidden lg:block w-[380px]">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search campaigns, analytics..."
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border bg-gray-50 
            focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />
        </div>
      </div>

    
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <BellDot size={20} className="text-gray-700" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-indigo-600 rounded-full" />
        </button>
      </div>
    </header>
  );
};

export default Header;