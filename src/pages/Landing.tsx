import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { motion } from "motion/react";
import { ArrowUpRight, Users, CheckCircle, TrendingUp } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      
      
      <main className="pt-20 h-screen grid grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col justify-center px-6 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">
                2024 / Outreach Automation
              </span>
              <h1 className="text-[12vw] lg:text-[8vw] font-display leading-[0.85] uppercase tracking-tighter">
                Automate <br />
                <span className="text-zinc-600">Your</span> <br />
                LinkedIn.
              </h1>
            </div>

            <div className="max-w-md">
              <p className="text-sm lg:text-base text-zinc-400 leading-relaxed uppercase tracking-wide font-medium">
                LinkedInAutomation helps you send personalized connection requests, follow-ups, and messages automatically — saving hours every day.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all"
              >
                Start Free Trial
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ opacity: 0.8 }}
                className="text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-1 hover:border-white transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </section>

        <section className="relative hidden lg:block overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
              alt="Professional Workspace"
              className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
            
            <div className="absolute bottom-20 right-20">
              <motion.div
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-48 h-48 border-r-4 border-b-4 border-white/20 relative"
              >
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-zinc-950 flex items-center justify-center">
                   <ArrowUpRight size={48} className="text-white opacity-20" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Users size={24} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Total Users</span>
              </div>
              <h3 className="text-7xl font-display uppercase tracking-tighter">50K+</h3>
              <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">Trusted by professionals worldwide</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <CheckCircle size={24} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Acceptance Rate</span>
              </div>
              <h3 className="text-7xl font-display uppercase tracking-tighter">45%</h3>
              <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">Average increase in connections</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <TrendingUp size={24} />
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Time Saved</span>
              </div>
              <h3 className="text-7xl font-display uppercase tracking-tighter">10H</h3>
              <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">Average hours saved per week</p>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <Footer />
    </div>
  );
};

export default Landing;
