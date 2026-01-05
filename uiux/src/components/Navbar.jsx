import { Menu,X } from "lucide-react";
import {useState} from "react"


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen]=useState(false);
    return(
        <nav className="border border-b-white/5 border border-r-0 border border-l-0 border border-t-0 fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                    <div>
                        <img src="WhatsApp Image 2025-12-28 at 7.37.49 PM.jpeg" alt="Moo"  className="w-6 h-6 sm:w-8 sm:h-8"/>
                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span className="text-white hover:text-blue-300">Code</span>
                        <span className="text-blue-400 hover:text-white">Flow</span>
                    </span>
</div>
{/* Navigation links */}
<div className="sm:hidden md:flex items-center space-x-6 lg:space-x-8">
<a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
<a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
<a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
</div>
<button className="md:hidden p-2 text-gray-300 hover:text-white"onClick={()=>setMobileMenuOpen((prev)=>!prev)}>
    {mobileMenuOpen ? (
        <X className="w-5 h-5 sm:w-6 sm:h-6"/>
    ) : (
        <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
    )}
</button>
                </div>
            </div>
            <div>
                {mobileMenuOpen &&
              
                    <div className="md:hidden bg-slate-800/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                           <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a href="#features" onClick={()=>setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                        <a href="#pricing" onClick={()=>setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                        <a href="#testimonials" onClick={()=>setMobileMenuOpen(false)} className="block px-4 py-2 text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                    </div>
                    </div>}
            </div>
        </nav>
    )
}