import React, { useEffect, useState, useRef } from 'react'
import { delay, motion } from 'framer-motion'
import { BiSolidCircle } from 'react-icons/bi'
import { VscDebugStart, VscDebugStop } from "react-icons/vsc";

const About = () => {
    const [terminal, setTerminal] = useState(false)
    const inputRef: any = useRef(null);  // Menggunakan useRef untuk input
    const [isStart, setIsStart] = useState(false)
    const [termInput, setTermInput] = useState("")
    useEffect(() => {
        setTimeout(() => {
            setTerminal(true);
        }, 6000);
    }, []);

    useEffect(() => {
        if (terminal && inputRef.current) {
            inputRef.current.focus();  // Memberikan fokus secara manual
        }
    }, [terminal]);
    function TopBar({theme}:any) {
        return (
            <div className={`${theme == "light" ? "bg-purple-50 border-neutral-200": "bg-neutral-600 border-neutral-400"} border-b-[1px]  flex flex-row gap-2 p-5 py-3 w-full rounded-t-xl`}>
                <BiSolidCircle className='text-red-500'></BiSolidCircle>
                <BiSolidCircle className='text-yellow-500'></BiSolidCircle>
                <BiSolidCircle className='text-green-500'></BiSolidCircle>
            </div>
        )
    }
    // useEffect ini dipanggil saat `terminal` berubah
    
    function handleSubmit(e: any) {
        e.preventDefault()
        if (termInput == "npm run dev" || termInput == "pnpm run dev" || termInput == "yarn dev") {
            setIsStart(true)
        }
    }
    return (
        <div className='px-10'>
            <motion.div dragMomentum={false} id='about' drag initial={{ y: 0 }} animate={{ y: -200 }} transition={{ delay: 4, duration: 1 }} className='flex flex-col items-center w-full border-[1px] border-neutral-600 bg-neutral-800 text-white rounded-xl'>
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
                                {`import React from 'react';

const About = () => {
return (
    <p>I'm Dzulfi, a final year Engineering Physics student at Institut 
    Teknologi Sepuluh Nopember.I am very passionate about learning 
    software development, IoT, and AI. I believe there is always something 
    new to try and learn every day. My friends often say that I'm always 
    busy, and I respond: "Being busy means there are many things to work on, 
    and as long as what you're working on is good and beneficial, I'll keep 
    myself busy. The more you work on, the more knowledge and experience you 
    gain. It's better to be busy than having nothing to do at all. Remember, 
    the average life expectancy is 72 years, so don't waste time."</p>
);
}

export default About;`}
                            </code>
                        </pre>
                    </div>
                    <div className='lg:w-full sm:w-full md:w-full w-full bg-neutral-900 pl-10 items-start p-4 flex flex-col gap-1'>
                        <div className='flex flex-row gap-1 items-center h-fit'>
                            <h1 >
                                <p>dz7@dz7 portfolio %</p>
                            </h1>
                            <h1 >
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
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, }} transition={{ delay: 2 }} drag dragMomentum={false} className='absolute left-1/2 -translate-x-1/2 top-[60%] flex flex-col w-[500px] bg-white text-black rounded-xl border-[1px] border-neutral-600'>
                    <TopBar theme="light"></TopBar>
                    <p className='p-5'>I'm Dzulfi, a final year Engineering Physics student at Institut
                        Teknologi Sepuluh Nopember. I am very passionate about learning
                        software development, IoT, and AI. I believe there is always something
                        new to try and learn every day. My friends often say that I'm always
                        busy, and I respond: "Being busy means there are many things to work on,
                        and as long as what you're working on is good and beneficial, I'll keep
                        myself busy. The more you work on, the more knowledge and experience you
                        gain. It's better to be busy than having nothing to do at all. Remember,
                        the average life expectancy is 72 years, so don't waste time."</p></motion.div>
            }
        </div>
    )
}

export default About
