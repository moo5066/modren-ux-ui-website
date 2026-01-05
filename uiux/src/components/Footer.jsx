import { Twitter, Linkedin, Mail, Github } from "lucide-react"
const footerLinks={
    Prodect:["Features","Pricing","security","RoadMap", "Changelog"],
    Compony:["About","Blog","Careers","Press", "Partners"],
    Resources:["Decomention","Help center","Community","API Reference", "Status"],
    Legal:["Privacy","Terms","Cookie Policy","Licenses", "Compliance"],

}
export default function Footer() {
    return(
        <footer className="border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:p-y-12 lg:py-16">
                {/* main footer content -hidden or mobile ,visible on sm and up */}
                <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12"> 
                    <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
<div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
    <div className="rounded-lg">
    <img
    scr="/WhatsApp Image 2025-12-28 at 7.02.28 PM.jpeg"
    alt="CodeFlow logo"
    className="w-6 h-6 sm:w-8 h-8"
    />
</div>
<span className="text-lg sm:text-xl font-bold">
<span className="text-white ">Code</span>
<span className="text-blue-400">Flow</span>
</span>
   </div>
   <p className="text-gray-400 mb-4 sm:mb-6 mx-w-xs mx-auto sm:mx-0  text-sm sm:text-base">
    Transform your workflow with AI-powred toold and animation built for modren teams
   </p>
   <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
    <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
        <Twitter className="w-5 h-5 sm:w-5 sm:h-5"/>
    </a>
    <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
        <Github className="w-5 h-5 sm:w-5 sm:h-5"/>
    </a>
    <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
        <Linkedin className="w-5 h-5 sm:w-5 sm:h-5"/>
    </a>
    <a href="#" className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
        <Mail className="w-5 h-5 sm:w-5 sm:h-5"/>
    </a>
   </div>
         </div>

{/* footer */}
<div className="sm:col-span-3 lg:col-span-4">
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
{Object.entries(footerLinks).map(([category,links])=>(
    <div key={category}>
        <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
            {category}
        </h3>
        <ul className="space-y-2 sm:space-y-3">
            {links.map((link)=>(
                <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
))}
    </div>

</div>


   </div>
   </div>
   <div className="max-w-full mx-auto py-8 sm:py-12 lg:py-16 mb-6 sm:mb-8 border border-t-slate-300/10 border-b-0 border-x-0 couser-pointer">
    <div className="flex justify-around ">
    <div className="flex space-x-8 sm:space-x-10 text-white hover:text-gray-400">
        <p>©2025 CodeFlow  All  rights  reserved</p>
    </div>
    <div className="flex space-x-6 sm:space-x-8 ">
       {footerLinks.Legal.map((link)=>(
        <p key={link} className="text-gray-400 hover:text-white">
            {link}
        </p>
       ))}
    </div>
    </div>
</div>

{/* <div className="max-w-full mx-auto py-8 sm:py-12 lg:py-16 border-t border-slate-300/10">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
    
    <p className="text-gray-400 text-sm">
      © 2025 CodeFlow. All rights reserved.
    </p>

    <div className="flex space-x-6 sm:space-x-8">
      {footerLinks.Legal.map((link) => (
        <p
          key={link}
          className="text-gray-400 hover:text-white cursor-pointer text-sm"
        >
          {link}
        </p>
      ))}
    </div>

  </div>
</div> */}

        </footer>   

                 
                    
         
    )
}