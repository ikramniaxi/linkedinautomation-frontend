import {
  Users,
  Zap,
  Send,
  MessageSquare,
} from "lucide-react";

const stats = [
  {
    title: "Total Connections",
    value: "1,240",
    change: "+12% this week",
    icon: Users,
  },
  {
    title: "Active Campaigns",
    value: "6",
    change: "+2 new",
    icon: Zap,
  },
  {
    title: "Messages Sent",
    value: "8,420",
    change: "+18% this week",
    icon: Send,
  },
  {
    title: "Replies",
    value: "312",
    change: "+8% this week",
    icon: MessageSquare,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-10">
      
     
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Overview
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Your LinkedIn automation performance at a glance
        </p>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, i) => {
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

                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-50">
                  <Icon size={20} className="text-indigo-600" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mt-4">
                {item.value}
              </h3>

              <span className="text-xs text-green-600 mt-2 inline-block">
                {item.change}
              </span>
            </div>
          );
        })}
      </div>

    
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
       
        <div className="xl:col-span-2 bg-white rounded-2xl p-6 shadow-sm h-80">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Messages Growth
          </h3>

          <div className="h-full flex items-center justify-center text-gray-400">
             Chart will be added here
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm h-80">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Campaign Health
          </h3>

          <div className="space-y-4">
            {[
              { label: "Running", value: 3 },
              { label: "Paused", value: 2 },
              { label: "Completed", value: 1 },
            ].map((cam) => (
              <div
                key={cam.label}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-600">
                  {cam.label}
                </span>
                <span className="font-semibold text-gray-900">
                  {cam.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;