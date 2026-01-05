export const codeExamples={
    "App.jsx":`
    import {useState} from "react"
    import {codeFlow} from "@codeflow/ai"

    function App(){
    const [code setCode]=useState("")

    const handleAICompletion=async()=>{
        const suggestion=await CodeFlow.complete(code);
        setCode(suggestion)
        };
        return(
        <div className="App">
        <CodeEditor 
        onChange={setCode}
        onAI{handleAIcompletion}
        />
        </div>
        
        )
    }
    `,
    "Navbar.jsx":`
    import {useState} from "react"

    function App(){
    const [code setCode]=useState("")

    const handleAICompletion=async()=>{
        const suggestion=await CodeFlow.complete(code);
        setCode(suggestion)
        };
        return(
        <div className="App">
        <CodeEditor 
        onChange={setCode}
        onAI{handleAIcompletion}
        />
        </div>
        
        )
    }
    `
    ,
    "Hero.jsx":`
    import {useState} from "react"

    function App(){
    const [code setCode]=useState("")

    const handleAICompletion=async()=>{
        const suggestion=await CodeFlow.complete(code);
        setCode(suggestion)
        };
        return(
        <div className="App">
        <CodeEditor 
        onChange={setCode}
        onAI{handleAIcompletion}
        />
        </div>
        
        )
    }
    `
    
}
export const floatingCards={
    "App.jsx":{
        bgColor:"bg-blue-500/20",
        iconColor:"text-blue-400",
        textColor:"text-blue-200",
        contentColor:"text-blue-300",
        icon:"AI",
        title:"Smart Completion",
        content:"AI-powred code suggestion in real-time"
        
    },
    "Hero.jsx":{
        bgColor:"bg-purple-500/20",
        iconColor:"text-purple-400",
        textColor:"text-purple-200",
        contentColor:"text-purple-300",
        icon:"☢︎",
        title:"Auto Animation",
        content:"Dynamic typing effects genereted automaticlly "

    },
    "Navbar.jsx":{
        bgColor:"bg-emeralad-500/20",
        iconColor:"text-emeralad-400",
        textColor:"text-emeralad-200",
        contentColor:"text-emeralad-300",
        icon:"🔎",
        title:"Smart Search",
        content:"AI-powred code suggestion in real-time"

    }
}