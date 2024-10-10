import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import TopBar from './TopBar'
import { VscDebugStart, VscDebugStop } from 'react-icons/vsc'


const Projects = () => {
    const [terminal, setTerminal] = useState(false)
    const inputRef: any = useRef(null);  // Menggunakan useRef untuk input
    const [isStart, setIsStart] = useState(false)
    const [termInput, setTermInput] = useState("")
    useEffect(() => {
        setTimeout(() => {
            setTerminal(true);
        }, 6000);
    }, []);

     function handleSubmit(e: any) {
        e.preventDefault()
        if (termInput == "python3 main.py" || termInput == "python main.py") {
            setIsStart(true)
        }
    }
    const [inView, setInView] = useState(false)
  return (
   <div className='px-10 mb-20'>
            <motion.div onViewportEnter={() => setInView(true)}   // Menjalankan saat elemen memasuki viewport
            onViewportLeave={() => setInView(false)} animate={{y:inView ? -100 : 0}}  dragMomentum={false} id='projects' drag transition={{  duration: 1 }} className='flex flex-col items-center w-full border-[1px] border-neutral-600 bg-neutral-800 text-white rounded-xl'>
                <TopBar></TopBar>
                <div className='flex sm:flex-col md:flex-col lg:flex-row flex-col w-full '>
                    <div className='border-r-2 border-white/30 sm:w-full w-full p-4 relative'>
                        {
                            !isStart ?
                                <button onClick={() => setIsStart(true)} className='absolute top-0 right-0 p-4 bg-black/30'><VscDebugStart size={20}></VscDebugStart></button>
                                :
                                <button onClick={() => setIsStart(false)} className='absolute top-0 right-0 p-4 bg-black/30'><VscDebugStop size={20}></VscDebugStop></button>
                        }
                        <pre>
                            <code>
                                {`projects = [
    {
        "name":"ECS Laboratory Website",
        "github": "https://github.com/dzulfikarubaid/ecs-website",
        "as":"Full-stack developer"
    },
    {
        "name":"ECS Laboratory Website",
        "github": "https://github.com/dzulfikarubaid/ecs-website",
        "as":"Full-stack developer"
    },
    
    
]
print(projects)
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className='lg:w-full sm:w-full md:w-full w-full bg-neutral-900 pl-10 items-start p-4 flex flex-col gap-1'>
                        <div className='flex flex-row gap-1 items-center h-fit'>
                            <h1>
                                <p>dz7@dz7 portfolio %</p>
                            </h1>
                            <h1>
                                {/* Menambahkan ref ke input */}
                                <form onSubmit={handleSubmit}>
                                    <input
                                    disabled={isStart}
                                        onChange={(e) => setTermInput(e.target.value)}
                                        ref={inputRef}
                                        type="text"
                                        className='bg-neutral-900 w-fit text-white h-fit p-2 focus:outline-none'
                                    />
                                </form>
                            </h1>
                        </div>
                        {
                            isStart &&
                            <p>
                                <pre>
                                    <code>
                                        {
                                            `> @0.0.1 dev /Users/dz7/portfolio
> astro dev

10:08:21 [types] Generated 2ms

 astro  v4.15.8 ready in 840 ms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose

10:08:21 watching for file changes...`
                                        }
                                    </code>

                                </pre>
                            </p>
                        }
                    </div>
                </div>
            </motion.div>
            {
                isStart &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, }} transition={{ delay: 2 }} drag dragMomentum={false} className='absolute left-1/2 -translate-x-1/2 top-[135%] flex flex-col w-full bg-white text-white rounded-xl border-[1px] border-neutral-600'>
                    <TopBar theme="light"></TopBar>
                    <p className='p-5'></p></motion.div>
            }
        </div>
  )
}

export default Projects