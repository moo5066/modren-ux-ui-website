import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown,Play, Sparkles } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";




export default function Hero() {
    const [mousePosition, setMousePosition]=useState({x:0,y:0})
    const [activeTab, setActiveTap]=useState("App.jsx")

useEffect(()=>{
    function handleMouseMove(e) {
      setMousePosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",handleMouseMove);
    return()=>{
        window.removeEventListener("mousemove",handleMouseMove)
    };
},[]) 

    const currentFloatingTaps=floatingCards[activeTab]

    return(
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4  sm:px-16 lg:px8 overflow-hidden ">
<div className="absolute inset-0 opacity-30" style={{background:`radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15),transparent 40%)`}}> 
</div>
<div className="max-w-7xl mx-auto text-center relative w-full">
    <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:12 items-center relative">
      <div>
        <div className="backdrop-blur-xl inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
            <Sparkles className="w-4 h-4 text-blue-400"/>
            <span className="text-xs sm:text-sm text-blue-300">Interducing CodeFlow AI</span>
        </div>
      
<h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibpld mb-4 sm:mb:6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Code Faster</span>
    <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Build Better</span>
    <span>With CodeFlow AI</span>
</h1>
<p className="text-md sm:text-base lg:text-lg text-gray-400 mix-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">Accellerate your development workflow with inglligent code completion, 
    automated testing, and smart debigging.ship 
    production-ready code 10x fasteer.</p>

<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 aminate-in slide-in-from-buttom duration-700 delay-300">
    <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base  transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 backdrop-blur-sm ">
        <span>Start Coding Free</span>
<ArrowRight w-4 h-4  sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 />
    </button>
    <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg font-semibold text-sm sm:text-base text-gray-300  transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
        <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
             <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
            </div>
        <span>Watch Demo</span>
    </button>
</div>

      </div>
  
<div className="relative order-2 w-full">
    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
        <div className="bg-gradient-to-br from-gray-900/20 to gray-800/20 backdrop-blur-lg rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5 ">
            {/* //IDE HEADER// */}
            <div className="flex items-center justify-between px-3 sm:px-4 py:2 sm:p3 bg-white/5 backdrop-blur-sm border-b border-white/5">
<div className="flex  items-center sm:space-x-2">
    <div className="w-2 h-2 rounded-full bg-red-500 sm:w-3 sm:h-3"></div>
    <div className="w-2 h-2 rounded-full bg-yellow-500 sm:w-3 sm:h-3"></div>
    <div className="w-2 h-2 rounded-full bg-green-500 sm:w-3 sm:h-3"></div>

<span className="text-xs sm:text-sm text-gray-300">CodeFlow AI</span>
</div>
<ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400"/>
            </div>
              <div className="p-3 sm:p-4 relative h-full">
            {/* file taps */}
            <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                <button 
                onClick={()=>setActiveTap("App.jsx")}
                className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                    ${activeTab==="App.jsx" ?"bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                     transition-all duration-200 whitespace-nowrap`}>App.jsx</button>
                <button 
                                onClick={()=>setActiveTap("Hero.jsx")}

                className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                    ${activeTab==="Hero.jsx" ?"bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                     transition-all duration-200 whitespace-nowrap`}>Hero.jsx
                     </button>
                <button
                                onClick={()=>setActiveTap("Navbar.jsx")}

                 className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border 
                    ${activeTab==="Navbar.jsx" ?"bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                     transition-all duration-200 whitespace-nowrap`}>Navbar.jsx
                     </button>
            </div>
         {/* code contant */}
         <div className="relative overflow-hidden flex-grow">
      <SyntaxHighlighter language="javascript" style={nightOwl}
      customStyle={{margin:0,borderRadius:"8px", fontSize:"11px", lineHeight:"1.4", height:"100%" ,border:"1px solid #3c3c3c"}}
      >
        {codeExamples[activeTab]}
      </SyntaxHighlighter>
         </div>
        </div>
        </div>
        
        {/* floating cards */}
        <div className={`hidden lg:block absolute botton-4  right-4 transfrom translate-y-8 width-72 ${currentFloatingTaps.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
<div className="flex items-center space-x-2 mb-2">
<div className={`w-6 h-6 ${currentFloatingTaps.iconColor} flex items-center justify-center text-sm font-bold`}>{currentFloatingTaps.icon}</div>
<span className={`text-sm  font-md ${currentFloatingTaps.textColor}`}>{currentFloatingTaps.title}</span>
</div>

<div className={`text-sm text-left ${currentFloatingTaps.contentColor}`}>
    {currentFloatingTaps.content}
</div>
        </div>
    </div>
</div>
  </div>
</div>

    </section>
    )
}



//arry is dependecy is very important
// //run once when component mounts
// cleanup runs when component unmounts
// no infinite re-render
// no console spam



// Situation	useEffect syntax
// Run once	useEffect(() => {}, [])
// Run when value changes	useEffect(() => {}, [value])
// Run every render	useEffect(() => {}) ❌ (rarely needed)