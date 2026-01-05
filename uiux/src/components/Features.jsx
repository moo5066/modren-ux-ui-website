import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const features=[
    {
        title:"AI-Powered Code Completion",
        description:"intlligent code suggestions powred AI that learns fromyou coding style and project context to provide relevant completions.",
        
        codeSnippet:`function handleSubmit({
        //AI suggests next line 
    const data=await fetch('/api/submit')
    //Aut-ocomplete by AI
    {
        }`,
        
        imgPostion:"left"
    },
    {
        title:"Automated Testing",
         codeSnippet:`decribe ("user authentication ,()=>{
            //AI generates test cases
    it("should log in user with valid credentials", async()=>{})`,
    description:"Automatically generate and run tests to ensure your code is reliable and bug-free.",

        imgPostion:"right"
    },
    {
        title:"Smart Debugging",
        description:"Identify and fix code issues faster with AI-driven debugging tools that analyze your code and suggest solutions.",
        codeSnippet:`//AI suggest fix: 
        // const result=await process data(input) 
        // fixed await keyword`,
        imgPostion:"left"
    }
]

export default function Features() {
    return(
        <section id="features" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"><span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Your Complete Devlopment</span>
                    <br/>
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">WorkFlow</span>
                    </h2>
                </div>

                <div className="space-y-16 sm:space-y-20 lg:space-y-32">
{features.map((feature,key)=>(
    <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12${feature.imgPostion === "right" ? "lg: flex-row-reverse":""}`}>
        {/* code section */}
        <div className='flex-1 w-full'>
            <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from blue-500/20 to purple-500/20 
                rounded-xl sm:rounded-2xl transition-all duration-500'/>

               
            <div className='relative bg-gray-900/50 backdrop-blur-sm border boder-gray-700/50 rounded-xl sm:2xl p-4 sm:p-6 over-hidden 
            group-hover:border-1 group-hoverr:border-blue-600/50 transition-all duration-300'>
                {/* id interface */}
                <div className='bg-gray-950 rounded-lg p-3 sm:p-4  font-mono text-xs sm:text-sm'>
                    <div className='flex items-center space-x-1  sm:space-x-2  mb-3 sm:mb-4'>
                       
          <div className="flex items-center sm:space-x-2 ">                 
    <div className="w-2 h-2 rounded-full bg-red-500 sm:w-3 sm:h-3"></div>
    <div className="w-2 h-2 rounded-full bg-yellow-500 sm:w-3 sm:h-3"></div>
    <div className="w-2 h-2 rounded-full bg-green-500 sm:w-3 sm:h-3"></div>
    </div> 
    <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">{feature.title}</span>
    </div>
    <div>
        <SyntaxHighlighter language="javascript" style={nightOwl}
      customStyle={{margin:0,borderRadius:"8px", fontSize:"0.75rem",background:"transparent", lineHeight:"1.4", height:"100%" }}
      wrapLines={true}
      >
        {feature.codeSnippet}
      </SyntaxHighlighter>
    </div>
                      
                    </div>
                    </div>
                </div>
            </div>
          {/* text section */}
          <div className='flex-1 w-full'>
           <div className='max-w-lg mx-auto lg:mx-0  text-center lg:text-left'>
            <h3 className='text-xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white'>{feature.title}</h3>
            <p className='text-gray-300 text-base text-xl sm:text-lg  leading-relaxed'>{feature.description}</p>
           </div>
          </div>
        </div>
  
))}
                </div>
            </div>
        </section>
    )
}