import { Sparkles, Search, Zap } from "lucide-react";

export const codeExamples = {
  "App.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="App">
      <CodeEditor
        value={code}
        onChange={setCode}
        onAI={handleAICompletion}
      />
    </div>
  );
}

export default App;
`,

  "Hero.jsx": `
import { useState } from "react";

function Hero() {
  const [text, setText] = useState("");

  return (
    <section className="hero">
      <h1>Welcome to CodeFlow AI</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </section>
  );
}

export default Hero;
`,

  "Navbar.jsx": `
function Navbar() {
  return (
    <nav className="navbar">
      <h1>CodeFlow</h1>
    </nav>
  );
}

export default Navbar;
`
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: Sparkles, // ✅ component, NOT string
    title: "Smart Completion",
    content: "AI-powered code suggestions in real time."
  },

  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: Zap, // ✅ component
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically."
  },

  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: Search, // ✅ component
    title: "Smart Search",
    content: "Instant AI-powered search across your codebase."
  }
};
