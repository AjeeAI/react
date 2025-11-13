export default function PricingTable() {
  const plans = [
    {
      id: 1,
      title: "Basic",
      price: "₦5,000/month",
      features: ["Access to basic products", "Standard support", "Limited updates"],
      popular: false,
      color: "bg-green-400",
    },
    {
      id: 2,
      title: "Pro",
      price: "₦15,000/month",
      features: ["All Basic features", "Priority support", "Unlimited updates", "Exclusive deals"],
      popular: true,
      color: "bg-green-600",
    },
    {
      id: 3,
      title: "Enterprise",
      price: "₦50,000/month",
      features: ["All Pro features", "Dedicated account manager", "Custom solutions"],
      popular: false,
      color: "bg-green-400",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Plans</h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`flex-1 rounded-xl shadow-md p-6 text-white flex flex-col items-center transform transition-transform
                ${plan.popular ? "scale-105 bg-green-600" : "bg-green-400"} hover:shadow-xl`}
            >
              {plan.popular && (
                <span className="uppercase text-sm font-bold bg-yellow-400 text-green-900 px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-xl font-semibold mb-4">{plan.price}</p>
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="before:content-['✓'] before:mr-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-green-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


