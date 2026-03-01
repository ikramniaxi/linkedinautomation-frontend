import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
          >
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-500">Our Story / Vision</span>
                <h1 className="text-7xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter">
                  Human <br />
                  <span className="text-zinc-600">Automation.</span>
                </h1>
              </div>
              
              <div className="flex flex-col gap-8 max-w-lg">
                <p className="text-xl text-zinc-300 leading-relaxed font-medium uppercase tracking-wide">
                  LinkedInAutomation is a productivity-focused SaaS platform designed to help professionals, recruiters, and founders automate their outreach in a smart way.
                </p>
                <p className="text-zinc-500 leading-relaxed uppercase tracking-widest text-sm font-bold">
                  Our goal is to save your time by automating repetitive tasks like sending connection requests, follow-ups, and outreach messages — while keeping your communication human and effective.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <span className="text-4xl font-display uppercase tracking-tighter">EST. 2024</span>
              </div>
            </div>
          </motion.div>

          <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-zinc-950 p-12 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600">01 / Mission</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Scale Relationships</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest leading-loose font-bold">
                We believe that automation shouldn't feel robotic. We build tools that help you scale genuine human connections.
              </p>
            </div>
            <div className="bg-zinc-950 p-12 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600">02 / Values</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Privacy First</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest leading-loose font-bold">
                Your data and your LinkedIn account safety are our top priorities. We use smart throttling to mimic human behavior.
              </p>
            </div>
            <div className="bg-zinc-950 p-12 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-600">03 / Goal</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Time Reclaimed</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest leading-loose font-bold">
                We want to give you back 10+ hours every week so you can focus on closing deals, not sending messages.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
