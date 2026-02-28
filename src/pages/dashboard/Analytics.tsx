import {
  TrendingUp,
  Send,
  MessageSquare,
  Users,
} from "lucide-react";

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
    <div className="space-y-10">
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Analytics
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Track your LinkedIn outreach performance
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {analyticsStats.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>
                <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Icon size={20} className="text-indigo-600" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-4">
                {item.value}
              </h3>

              <span className="text-xs text-green-600 mt-2 inline-block">
                {item.change} this month
              </span>
            </div>
          );
        })}
      </div>

  
      <div className="bg-white rounded-2xl p-6 shadow-sm h-96">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Engagement Trend
        </h3>
        <div className="h-full flex items-center justify-center text-gray-400">
          Analytics chart will be added here
        </div>
      </div>
    </div>
  );
};

export default Analytics;