const Landing = () => {
  return (
    <section className="pt-24 flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-5xl font-bold mb-4">
        Automate Your LinkedIn Outreach
      </h1>

      <p className="text-gray-600 max-w-xl mb-6">
        LinkedInAutomation helps you send personalized connection requests,
        follow-ups, and messages automatically — saving hours every day.
      </p>

      <div className="flex gap-4">
        
        <button
          className="
            bg-[#2563eb]
            text-white
            px-6
            py-3
            rounded-full
            font-medium
            hover:bg-[#1e40af]
            transition
          "
        >
          Start Free Trial
        </button>

       
        <button
          className="
            border
            border-[#2563eb]
            text-[#2563eb]
            px-6
            py-3
            rounded-full
            font-medium
            hover:bg-[#2563eb]
            hover:text-white
            transition
          "
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Landing;