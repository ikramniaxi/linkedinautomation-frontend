import { motion } from "motion/react";
import { Zap, Target, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Smart Targeting",
    description: "Find your ideal prospects using advanced filters and AI-driven lead scoring.",
    icon: <Target className="text-zinc-500" size={32} />,
  },
  {
    id: "02",
    title: "Auto Connect",
    description: "Send personalized connection requests that actually get accepted, at scale.",
    icon: <Zap className="text-zinc-500" size={32} />,
  },
  {
    id: "03",
    title: "Smart Follow-ups",
    description: "Automated message sequences that stop as soon as a prospect replies.",
    icon: <MessageSquare className="text-zinc-500" size={32} />,
  },
  {
    id: "04",
    title: "Deep Analytics",
    description: "Track your campaign performance with real-time data and conversion metrics.",
    icon: <BarChart3 className="text-zinc-500" size={32} />,
  },
];

const Features = () => {
  return (
    <section className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-6xl md:text-8xl font-display uppercase leading-none">
              Powerful <br />
              <span className="text-zinc-600">Features.</span>
            </h2>
          </div>
          <p className="max-w-xs text-zinc-500 text-sm uppercase tracking-widest font-medium leading-relaxed">
            Everything you need to dominate your industry and build meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="bg-zinc-950 p-10 flex flex-col gap-8 transition-colors group"
            >
              <div className="flex justify-between items-start">
                <span className="text-4xl font-display text-zinc-800 group-hover:text-white transition-colors">
                  {feature.id}
                </span>
                {feature.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed uppercase tracking-wide">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
