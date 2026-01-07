import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { codeExamples, floatingCards } from "../data/CodeExamples";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentFloatingTab = floatingCards[activeTab] || {};
  const Icon = currentFloatingTab.icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 lg:px-8 overflow-hidden">
      {/* background glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59,130,246,0.15),
            transparent 40%
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">
                Introducing CodeFlow AI
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Code Faster
              </span>
              <span className="block bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-100 bg-clip-text text-transparent">
                Build Better
              </span>
              <span>With CodeFlow AI</span>
            </h1>

            <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group px-8 py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
                <span>Start Coding Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold text-gray-300 flex items-center justify-center gap-2 hover:bg-white/10 transition">
                <span className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition">
                  <Play className="w-5 h-5 fill-white" />
                </span>
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative w-full">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 rounded-lg overflow-hidden h-[450px] border border-white/5">
                {/* IDE HEADER */}
                <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-300 ml-2">
                      CodeFlow AI
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                {/* CONTENT */}
                <div className="p-4 h-full">
                  {/* tabs */}
                  <div className="flex gap-2 mb-4 overflow-x-auto">
                    {["App.jsx", "Hero.jsx", "Navbar.jsx"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-2 text-sm rounded-t-lg border transition
                          ${
                            activeTab === tab
                              ? "bg-blue-500/30 text-white border-blue-400/20"
                              : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* code */}
                  <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    customStyle={{
                      margin: 0,
                      borderRadius: "8px",
                      fontSize: "11px",
                      lineHeight: "1.4",
                      height: "100%",
                      border: "1px solid #3c3c3c",
                    }}
                  >
                    {codeExamples[activeTab]}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* floating card */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 transform translate-y-8 w-72
                ${currentFloatingTab.bgColor} backdrop-blur-xl rounded-lg p-4
                border border-white/20 shadow-2xl`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-6 h-6 ${currentFloatingTab.iconColor} flex items-center justify-center`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </div>
                  <span
                    className={`text-sm font-medium ${currentFloatingTab.textColor}`}
                  >
                    {currentFloatingTab.title}
                  </span>
                </div>

                <p
                  className={`text-sm text-left ${currentFloatingTab.contentColor}`}
                >
                  {currentFloatingTab.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
