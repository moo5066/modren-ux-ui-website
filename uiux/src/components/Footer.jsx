import { Twitter, Linkedin, Mail, Github } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "RoadMap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Community", "API Reference", "Status"],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <img
                src="WhatsApp Image 2025-12-28 at 7.02.28 PM.jpeg"
                alt="CodeFlow logo"
                className="w-8 h-8"
              />
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Transform your workflow with AI-powered tools and animations built for modern teams.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="sm:col-span-3 lg:col-span-4 grid grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-3 text-sm sm:text-base">{category}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-slate-300/10 pt-6">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2025 CodeFlow. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {footerLinks.Legal.map((link) => (
              <p key={link} className="text-gray-400 hover:text-white text-sm cursor-pointer">
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
