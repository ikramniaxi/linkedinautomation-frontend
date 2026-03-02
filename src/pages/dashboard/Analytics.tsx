
import {
  TrendingUp,
  Send,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const analyticsStats = [
  {
    title: "Profile Views",
    value: "3,420",
    change: "+14%",
    icon: Users,
  },
  {
    title: "Messages Sent",
    value: "8,420",
    change: "+18%",
    icon: Send,
  },
  {
    title: "Replies",
    value: "312",
    change: "+9%",
    icon: MessageSquare,
  },
  {
    title: "Reply Rate",
    value: "3.7%",
    change: "+1.2%",
    icon: TrendingUp,
  },
];

const Analytics = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">Analytics / 2024</span>
        <h2 className="text-5xl font-display uppercase tracking-tighter text-zinc-900">
          Outreach <br />
          <span className="text-zinc-400">Performance.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {analyticsStats.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-zinc-100 hover:border-zinc-900 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
                  {item.title}
                </p>
                <div className="h-10 w-10 rounded-xl bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                  <Icon size={18} />
                </div>
              </div>

              <h3 className="text-4xl font-display uppercase tracking-tighter text-zinc-900">
                {item.value}
              </h3>

              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-600 mt-4 inline-block">
                {item.change} this month
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl p-10 border border-zinc-100 h-[500px] flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-xl font-display uppercase tracking-widest text-zinc-900">
            Engagement Trend
          </h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-900" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Replies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-200" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Sent</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center border-2 border-dashed border-zinc-50 rounded-2xl text-zinc-300 text-[10px] uppercase tracking-widest font-bold">
          Detailed engagement charts are available in the insights tab
        </div>
      </div>
    </div>
  );
};

export default Analytics;
