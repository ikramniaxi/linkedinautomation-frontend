import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, MoreHorizontal, X } from "lucide-react";

type CampaignStatus = "Active" | "Paused" | "Completed";

type Campaign = {
  name: string;
  status: CampaignStatus;
  leads: number;
  sent: number;
  replies: number;
};

const initialCampaigns: Campaign[] = [
  {
    name: "CTO Outreach – US",
    status: "Active",
    leads: 320,
    sent: 840,
    replies: 48,
  },
  {
    name: "Startup Founders – EU",
    status: "Paused",
    leads: 210,
    sent: 560,
    replies: 21,
  },
  {
    name: "Marketing Heads – SaaS",
    status: "Completed",
    leads: 180,
    sent: 420,
    replies: 36,
  },
];

const badgeStyle: Record<CampaignStatus, string> = {
  Active: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Paused: "bg-amber-50 text-amber-700 border-amber-100",
  Completed: "bg-zinc-100 text-zinc-600 border-zinc-200",
};

const Campaigns: React.FC = () => {
  const [campaignList, setCampaignList] = useState<Campaign[]>(initialCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: "", leads: 0 });

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    const campaign: Campaign = {
      name: newCampaign.name,
      status: "Active",
      leads: Number(newCampaign.leads),
      sent: 0,
      replies: 0,
    };
    setCampaignList([campaign, ...campaignList]);
    setIsModalOpen(false);
    setNewCampaign({ name: "", leads: 0 });
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">Campaigns / 2024</span>
          <h1 className="text-5xl font-display uppercase tracking-tighter text-zinc-900">
            Outreach <br />
            <span className="text-zinc-400">Campaigns.</span>
          </h1>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 bg-zinc-900 text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-zinc-800 transition-all flex items-center gap-3 group"
        >
          <Plus size={16} />
          New Campaign
        </button>
      </div>

   
      <div className="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-zinc-50 border-b border-zinc-100">
            <tr>
              <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Campaign Name</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Status</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Leads</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Sent</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold text-zinc-400">Replies</th>
              <th className="px-8 py-5 text-[10px] uppercase tracking-widest font-bold text-zinc-400"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-zinc-50">
            {campaignList.map((campaign, i) => (
              <motion.tr 
                key={campaign.name + i} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-zinc-50/50 transition-colors group"
              >
                <td className="px-8 py-6">
                  <span className="text-xs uppercase tracking-widest font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    {campaign.name}
                  </span>
                </td>

                <td className="px-8 py-6">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black border ${badgeStyle[campaign.status]}`}
                  >
                    {campaign.status}
                  </span>
                </td>

                <td className="px-8 py-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">{campaign.leads}</td>
                <td className="px-8 py-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">{campaign.sent}</td>
                <td className="px-8 py-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">{campaign.replies}</td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-zinc-900">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

    
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">Action / New Campaign</span>
                  <h2 className="text-4xl font-display uppercase tracking-tighter text-zinc-900">Create <br/><span className="text-zinc-400">Campaign.</span></h2>
                </div>

                <form onSubmit={handleCreateCampaign} className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Campaign Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Sales Outreach Q1"
                      value={newCampaign.name}
                      onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                      className="bg-transparent border-b border-zinc-100 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Target Leads</label>
                    <input 
                      type="number" 
                      placeholder="500"
                      value={newCampaign.leads || ""}
                      onChange={(e) => setNewCampaign({...newCampaign, leads: Number(e.target.value)})}
                      className="bg-transparent border-b border-zinc-100 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-200"
                      required
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group flex items-center justify-center gap-4 w-full bg-zinc-900 text-white py-5 rounded-full font-bold uppercase tracking-widest text-xs transition-all mt-4"
                  >
                    Launch Campaign
                    <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Campaigns;
