import React from "react";


type CampaignStatus = "Active" | "Paused" | "Completed";

type Campaign = {
  name: string;
  status: CampaignStatus;
  leads: number;
  sent: number;
  replies: number;
};


const campaigns: Campaign[] = [
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
  Active: "bg-green-50 text-green-700",
  Paused: "bg-yellow-50 text-yellow-700",
  Completed: "bg-gray-100 text-gray-600",
};

const Campaigns: React.FC = () => {
  return (
    <div className="space-y-8">
   
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Campaigns</h1>
          <p className="text-sm text-gray-500 mt-1">
            Your active and past outreach campaigns
          </p>
        </div>

        <button className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          + New Campaign
        </button>
      </div>

     
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-4 text-left font-medium">Campaign</th>
              <th className="px-6 py-4 text-left font-medium">Status</th>
              <th className="px-6 py-4 text-left font-medium">Leads</th>
              <th className="px-6 py-4 text-left font-medium">Sent</th>
              <th className="px-6 py-4 text-left font-medium">Replies</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((campaign, i) => (
              <tr key={i} className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium text-gray-900">{campaign.name}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${badgeStyle[campaign.status]}`}
                  >
                    {campaign.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-700">{campaign.leads}</td>
                <td className="px-6 py-4 text-gray-700">{campaign.sent}</td>
                <td className="px-6 py-4 text-gray-700">{campaign.replies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;