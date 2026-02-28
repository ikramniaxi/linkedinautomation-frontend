import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals starting their outreach journey.",
    features: ["500 Connection Requests / mo", "Basic Message Templates", "Email Support", "Daily Limits"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$79",
    description: "The most popular choice for sales professionals.",
    features: ["Unlimited Connection Requests", "AI Message Personalization", "Priority Support", "Advanced Analytics", "Smart Follow-ups"],
    cta: "Get Pro Access",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "Custom solutions for large teams and agencies.",
    features: ["Team Management", "Dedicated Account Manager", "Custom API Access", "White-label Reports", "Bulk Import/Export"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />
      
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-zinc-500 mb-4 block">Pricing Plans / 2024</span>
              <h1 className="text-7xl md:text-9xl font-display uppercase leading-[0.85] tracking-tighter">
                Simple <br />
                <span className="text-zinc-600">Pricing.</span>
              </h1>
            </div>
            <p className="max-w-xs text-zinc-500 text-sm uppercase tracking-widest font-bold leading-relaxed">
              Choose the plan that fits your growth goals. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-zinc-950 p-12 flex flex-col gap-12 relative ${plan.highlight ? 'ring-1 ring-white/20' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] uppercase tracking-widest font-black px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-display uppercase tracking-tighter">{plan.price}</span>
                    <span className="text-zinc-600 text-xs uppercase tracking-widest font-bold">/ month</span>
                  </div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest leading-loose font-bold">{plan.description}</p>
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-700">What's Included</span>
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-zinc-400">
                        <Check size={14} className="text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group flex items-center justify-center gap-4 w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all ${
                    plan.highlight ? 'bg-white text-black' : 'border border-white/20 text-white hover:bg-white hover:text-black hover:border-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
