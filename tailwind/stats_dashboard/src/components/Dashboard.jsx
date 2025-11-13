function StatsDashboard() {
  const stats = [
    { id: 1, title: "Total Sales", value: "₦2.5M", change: "+12% ↑", emoji: "🛒", color: "bg-blue-500" },
    { id: 2, title: "Orders", value: "1,234", change: "+8% ↑", emoji: "📦", color: "bg-green-500" },
    { id: 3, title: "Customers", value: "567", change: "+23% ↑", emoji: "👥", color: "bg-yellow-500" },
    { id: 4, title: "Revenue", value: "₦4.2M", change: "+15% ↑", emoji: "💰", color: "bg-red-500" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Stats Dashboard</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {stats.map(stat => (
            <div
              key={stat.id}
              className={`${stat.color} text-white rounded-xl shadow-md p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow min-w-[220px]`}
            >
              <div className="text-3xl">{stat.emoji}</div>
              <div>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-sm">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsDashboard;
