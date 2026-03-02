
import {
  Users,
  Zap,
  Send,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    title: "Total Connections",
    value: "1,240",
    change: "+12% this week",
    icon: Users,
  },
  {
    title: "Active Campaigns",
    value: "6",
    change: "+2 new",
    icon: Zap,
  },
  {
    title: "Messages Sent",
    value: "8,420",
    change: "+18% this week",
    icon: Send,
  },
  {
    title: "Replies",
    value: "312",
    change: "+8% this week",
    icon: MessageSquare,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">Overview / 2024</span>
          <h2 className="text-5xl font-display uppercase tracking-tighter text-zinc-900">
            Performance <br />
            <span className="text-zinc-400">Summary.</span>
          </h2>
        </div>
        <button className="px-8 py-3 bg-zinc-900 text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-zinc-800 transition-all flex items-center gap-3 group">
          Export Report
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-zinc-100 hover:shadow-xl hover:shadow-zinc-200/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                  {item.title}
                </p>
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-50 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                  <Icon size={18} />
                </div>
              </div>

              <h3 className="text-4xl font-display uppercase tracking-tighter text-zinc-900">
                {item.value}
              </h3>

              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 mt-4 inline-block">
                {item.change}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white rounded-2xl p-8 border border-zinc-100 h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-display uppercase tracking-widest text-zinc-900">
              Messages Growth
            </h3>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-900" />
              <div className="w-3 h-3 rounded-full bg-zinc-200" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center border-2 border-dashed border-zinc-50 rounded-xl text-zinc-300 text-[10px] uppercase tracking-widest font-bold">
             Interactive chart will be added in insights
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-zinc-100 h-[400px] flex flex-col">
          <h3 className="text-lg font-display uppercase tracking-widest text-zinc-900 mb-8">
            Campaign Health
          </h3>
          <div className="space-y-6">
            {[
              { label: "Running", value: 3, color: "bg-emerald-500" },
              { label: "Paused", value: 2, color: "bg-amber-500" },
              { label: "Completed", value: 1, color: "bg-zinc-300" },
            ].map((cam) => (
              <div key={cam.label} className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-zinc-500 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${cam.color}`} />
                    {cam.label}
                  </span>
                  <span className="text-zinc-900">
                    {cam.value}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-zinc-50 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${cam.color}`} 
                    style={{ width: `${(cam.value / 6) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
