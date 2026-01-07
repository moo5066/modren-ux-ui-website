import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for growing businesses",
    features: [
      "Up to 10 team members",
      "50GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 support",
      "API access",
      "Mobile app",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple Transparent
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your needs. No hidden fees, includes a 14-day free trial, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col h-full ${
                plan.mostPopular
                  ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl" />

              {/* Most Popular Badge */}
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-4 py-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs font-semibold shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Title & Price */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-gray-300 transition-all duration-300 flex items-center justify-center ${
                  plan.mostPopular
                    ? "bg-gradient-to-b from-blue-500 to-cyan-400 border border-blue-500"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-base sm:text-lg">
            Need a custom plan?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
