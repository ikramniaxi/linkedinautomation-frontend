import { Link } from "react-router-dom";
import { ArrowUpRight, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="flex flex-col gap-12">
            <h2 className="text-[10vw] lg:text-[6vw] font-display uppercase leading-[0.85] tracking-tighter">
              Let's <br />
              <span className="text-zinc-600">Connect.</span>
            </h2>
            <div className="flex flex-wrap gap-8">
              <a href="mailto:hello@linkedinautomation.com" className="group flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold hover:text-zinc-400 transition-colors">
                <Mail size={16} />
                Email Us
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#" className="group flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold hover:text-zinc-400 transition-colors">
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="#" className="group flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold hover:text-zinc-400 transition-colors">
                <Twitter size={16} />
                Twitter
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Navigation</span>
              <ul className="flex flex-col gap-4">
                <li><Link to="/" className="text-xs uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-xs uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors">About</Link></li>
                <li><Link to="/pricing" className="text-xs uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors">Pricing</Link></li>
                <li><Link to="/features" className="text-xs uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors">Features</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Legal</span>
              <ul className="flex flex-col gap-4">
                <li><Link to="#" className="text-xs uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors">Privacy</Link></li>
                <li><Link to="#" className="text-xs uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors">Terms</Link></li>
                <li><Link to="#" className="text-xs uppercase tracking-widest font-bold hover:text-zinc-400 transition-colors">Cookies</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Office</span>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 leading-loose">
                123 Automation Way<br />
                Silicon Valley, CA<br />
                94025
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-700">
            © 2024 LinkedInAutomation. All Rights Reserved.
          </span>
          <div className="flex items-center gap-8">
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-700">
               Designed by Studio Shodwe
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
