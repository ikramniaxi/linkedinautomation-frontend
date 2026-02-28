import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import {  Send, MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-500">Contact Us / Support</span>
                <h1 className="text-7xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter">
                  Get In <br />
                  <span className="text-zinc-600">Touch.</span>
                </h1>
              </div>
              
              <div className="flex flex-col gap-12 max-w-md">
                <p className="text-xl text-zinc-300 leading-relaxed font-medium uppercase tracking-wide">
                  Have a question or need help scaling your outreach? Our team is here to support you.
                </p>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Mail size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Email</span>
                      <span className="text-xs uppercase tracking-widest font-bold">hello@linkedinautomation.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Phone size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Phone</span>
                      <span className="text-xs uppercase tracking-widest font-bold">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <MapPin size={18} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Location</span>
                      <span className="text-xs uppercase tracking-widest font-bold">Silicon Valley, CA</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-zinc-900/50 p-12 rounded-2xl border border-white/5 backdrop-blur-sm"
            >
              <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Inquiry"
                    className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800 resize-none"
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-4 w-full bg-white text-black py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
