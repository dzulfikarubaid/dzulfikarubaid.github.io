import { div } from 'framer-motion/client'
import React, { useEffect } from 'react'
import { BiDownload, BiHeart, BiLinkExternal, BiLogoDjango, BiLogoGithub, BiLogoGmail, BiLogoInstagram, BiLogoInstagramAlt, BiLogoJavascript, BiLogoLinkedin, BiLogoPython, BiMailSend, BiMessage, BiMessageAdd, BiMoon, BiRightTopArrowCircle, BiShow, BiSolidRightTopArrowCircle, BiSun } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { SiAstro, SiDjango, SiElectron, SiFlask, SiFlutter, SiFramer, SiGithub, SiKotlin, SiNextdotjs, SiPytorch, SiReact, SiSwift, SiTailwindcss, SiTauri, SiTensorflow, SiVercel } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { setMode } from '../redux/redux';
import store from '../redux/redux';
const Home = () => {
    const [ai, setAi] = React.useState(true)
    const [iot, setIot] = React.useState(false)
    const [sd, setSd] = React.useState(false)
    const [other, setOther] = React.useState(false)
    const [dark, setDark] = React.useState(false)
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDark(true)
            console.log("dark")
            store.dispatch(setMode("dark"))
        }
        else {
            setDark(false)
            console.log("light")
            store.dispatch(setMode("light"))
        }
    }, [])
    function onSun() {
        setDark(false)
        store.dispatch(setMode("light"))
    }
    function onMoon() {
        setDark(true)
        store.dispatch(setMode("dark"))
    }
    function onCategoryClick(category: string) {
        if (category == "ai") {
            setAi(true)
            setIot(false)
            setSd(false)
            setOther(false)
        }
        if (category == "iot") {
            setAi(false)
            setIot(true)
            setSd(false)
            setOther(false)
        }
        if (category == "sd") {
            setAi(false)
            setIot(false)
            setSd(true)
            setOther(false)
        }
        if (category == "other") {
            setAi(false)
            setIot(false)
            setSd(false)
            setOther(true)
        }
    }
    function Card(props: any) {
        const { children, className } = props
        return (
            <div className={`rounded-3xl  border-[1px] p-5 bg-gradient-to-br  ${!dark ? "from-indigo-50 to-neutral-50 border-white text-black" : "from-neutral-900 to-neutral-800 border-white/10 text-white "} lg:w-fit w-full shadow-md ${className}`}>
                {children}
            </div>
        )

    }
    function SubText(props: any) {
        const { children } = props
        return (
            <p className=' text-neutral-500'>
                {children}
            </p>
        )

    }
    function SmallText(props: any) {
        const { children } = props
        return (
            <p className='text-[10px] text-neutral-500'>
                {children}
            </p>
        )

    }
    function Maps() {
        return <iframe className='rounded-xl lg:h-full h-[250px] lg:w-fit w-full grayscale hover:grayscale-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20750916582!2d112.71268375!3d-7.275619450000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1727779537312!5m2!1sen!2sid" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    }
    function Icon({ children }: any) {
        return <div className='p-2 bg-neutral-200 border-[1px] border-white rounded-xl w-fit'>
            {children}
        </div>
    }
    function Slider() {
        return <Swiper
            className='w-full flex justify-center items-center'
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: true, }}
            speed={1000}
            draggable={true}
            modules={[Autoplay]}
        >
            <SwiperSlide><Icon><SiAstro></SiAstro></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiReact color='#61DBFB'></SiReact></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiNextdotjs></SiNextdotjs></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiDjango color='darkgreen'></SiDjango></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiFlask></SiFlask></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiTailwindcss color='#38bdf8'></SiTailwindcss></Icon></SwiperSlide>
            <SwiperSlide><Icon><IoLogoFirebase color='#FFA500' /></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiElectron color='#61DBFB'></SiElectron></Icon></SwiperSlide>

            <SwiperSlide><Icon><SiVercel></SiVercel></Icon></SwiperSlide>

            <SwiperSlide><Icon><SiPytorch color='#DE3412'></SiPytorch></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiFramer></SiFramer></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiTensorflow color='orange'></SiTensorflow></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiFlutter color='#38bdf8'></SiFlutter></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiTauri></SiTauri></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiSwift color='#DE4412'></SiSwift></Icon></SwiperSlide>
            <SwiperSlide><Icon><SiKotlin color='#7F52FF'></SiKotlin></Icon></SwiperSlide>

        </Swiper>
    }
    function ProjectCard({ title, description, imageSrc, footer, className, github, website }: any) {
        return (
            <div className={`rounded-3xl border-white border-[1px] p-5 bg-gradient-to-br ${!dark ? "from-indigo-50 to-neutral-50 border-white text-black" : "from-neutral-900 to-neutral-800 border-white/10 text-white "}  lg:w-[500px] w-full ${className}`}>
                {imageSrc != ""?
                <img src={`projects/${imageSrc}`} alt={title} className="rounded-xl mb-3 lg:h-[250px]  w-full" />:
                <img src={`projects/project.png`} alt={title} className="rounded-xl mb-3 lg:h-[250px] w-full" />
                }
                <div className='flex flex-row justify-between items-end'>
                    <div>
                        <SmallText>{description}</SmallText>
                        <h1 className="text-2xl">{title}</h1>
                    </div>
                    <div className='flex gap-5 items-center'>
                        {github && <button className="text-2xl"><a href={github} target="_blank"><SiGithub></SiGithub></a></button>}
                        {website && <button className="text-2xl"><a href={website} target="_blank"><MdOutlineArrowOutward></MdOutlineArrowOutward></a></button>}
                    </div>
                </div>
                {footer && <div className="mt-4">{footer}</div>}
            </div>
        );
    }

    const projectData: any = [
        {
            title: "SCOREBOARD USING IOT",
            description: "PROJECT AT ECS LAB",
            imageSrc: "strike.png",
            category: ["IoT"],
            
        },
        {
            title: "ECS & EPTA WEBSITE",
            description: "PROJECT AT ECS LAB",
            imageSrc: "ecsepta.png",
            website: "https://ecs-laboratory.com",
            category: ["SD"]

        },
        {
            title: "BABY MEASUREMENT USING IMAGE PROCESSING",
            description: "PROJECT AT PATENT TEAM",
            imageSrc: "",
            category: ["SD", "AI"],
            github:"https://github.com/dzulfikarubaid/flet-gui"
        },
        {
            title: "CHILLI SEGMENTATION AND CLASSIFICATION USING YOLO V5",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["AI"],
        },
        {
            title: "DISTANCE MEASUREMENT USING STEREO CAMERA",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["AI"],
        },
        {
            title: "DEPTH ESTIMATION USING DEPTH ANYTHING",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["AI"],
        },
        {
            title: "FACE IDENTIFICATION USING DEEPFACE",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["AI"],
        },
        {
            title: "goMuduk WEBSITE",
            description: "INDEPENDENT PROJECT",
            category: ["SD"],
            imageSrc: "gomuduk.png",
            website: "https://gomuduk.vercel.app",
            github: "https://github.com/dzulfikarubaid/gomuduk"
        },
        {
            title: "GolekTruk WEBSITE",
            description: "INDEPENDENT PROJECT",
            imageSrc: "golektruk.png",
            website: "https://golektruk.vercel.app",
            category: ["SD"],
            github:"https://github.com/dzulfikarubaid/golektruk"
        },
        {
            title: "DETECTION OF PRESIDENTIAL ELECTION MISCALCULATION ON THE KPU WEBSITE",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["OTHER"],
            github:"https://github.com/dzulfikarubaid/deteksi_kesalahan_input_pilpres_2024"
        },
        {
            title: "TRANSUB MOBILE APPLICATION",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["SD"],
            github:"https://github.com/dzulfikarubaid/transub"
        },
        {
            title: "CARDIOSAVER MOBILE APPLICATION",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["SD"],
            github:"https://github.com/dzulfikarubaid/cardiosaver-api"
        },
        {
            title: "PERSONAL PROTECTIVE EQUIPMENT VIOLATION DETECTION AND WARNING SYSTEM USING YOLO V4 TINY AND YOLO V8",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["AI"],
            github:"https://github.com/dzulfikarubaid/ppe.git"
        },
        {
            title: "SHIP RECORDING APPLICATION",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["SD"],
            github:"https://github.com/dzulfikarubaid/kapal-app"
        },
        {
            title: "SLIP, TRIP, AND FALL DETECTION USING AI AND IOT",
            description: "INDEPENDENT PROJECT",
            imageSrc: "",
            category: ["IoT"],
        },
        // Tambahkan proyek lainnya di sini
    ];
    return (
        <div className='flex flex-col justify-center items-center w-full gap-5 '>
            <section className='flex lg:flex-row flex-col gap-5 w-full lg:w-fit px-5'>
                <Card>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-3xl  '>AHMAD DZULFIKAR UBAIDILLAH</h1>
                        <SubText>
                            try more, learn more, get more, build more, and share more
                        </SubText>
                    </div>
                </Card>
                <Card>
                    {/* <div className='relative h-full'> */}
                    <Maps></Maps>
                    {/* <div className="absolute inset-0 rounded-xl bg-indigo-200 opacity-30 mix-blend-multiply"></div>
                    </div> */}
                </Card>
                <div className='flex flex-col gap-5'>
                    <Card>
                        <div className='flex justify-center items-center text-4xl gap-4'>
                            <button onClick={onSun} className={` ${!dark && "bg-gradient-to-br from-white to-transparent  shadow-md !text-orange-400"} p-5 rounded-2xl w-full flex items-center justify-center text-neutral-500 `}><BiSun></BiSun></button>
                            <button onClick={onMoon} className={` ${dark && "bg-gradient-to-br from-white/20 to-transparent  shadow-md !text-indigo-200"} p-5 rounded-2xl w-full flex items-center justify-center text-neutral-500`}><BiMoon></BiMoon></button>
                        </div>
                    </Card>
                    <Card>
                        <div className='flex items-center justify-between gap-10'>
                            <div>
                                <SmallText>LATEST CV</SmallText>
                                <h1 className='text-2xl'>RESUME</h1>
                            </div>
                            <div className='flex gap-5 text-4xl'>
                                <button><BiDownload></BiDownload></button>
                                <button><BiShow></BiShow></button>
                            </div>
                        </div>
                    </Card>

                </div>
            </section>
            <section className='flex gap-5 lg:flex-row flex-col px-5  lg:w-fit w-full'>
                <div className='flex lg:flex-col flex-row lg:w-fit w-full gap-5 text-4xl'>
                    <a href="" className='w-full'><Card className="flex justify-center items-center lg:p-5 px-3 py-4 rounded-2xl"><BiLogoLinkedin></BiLogoLinkedin></Card></a>
                    <a href="" className='w-full'>
                        <Card className="flex justify-center items-center lg:p-5  px-3 py-4 rounded-2xl"><BiLogoGithub></BiLogoGithub></Card>
                    </a>
                    <a href="" className='w-full'>
                        <Card className="flex justify-center items-center lg:p-5  px-3 py-4  rounded-2xl"><BiLogoInstagram></BiLogoInstagram></Card>
                    </a>

                    <a href="" className='w-full'>
                        <Card className="flex justify-center items-center lg:p-5  px-3 py-4  rounded-2xl">
                            <BiLogoGmail></BiLogoGmail>
                        </Card>
                    </a>

                </div>
                <div className='flex flex-col gap-5'>
                    <div className={`rounded-3xl border-[1px]  ${!dark ? "bg-indigo-50 border-white text-black" : "bg-neutral-900 border-white/10 text-white "} p-5 w-full`}>
                        <div className='lg:w-[400px] w-full  text-5xl flex justify-center items-center py-14 relative text-black'>
                            <Slider></Slider>
                            <div className={`absolute -translate-y-1/2 top-1/2 inset-y-0 -left-4 w-16 h-24 bg-gradient-to-r ${!dark ? "from-indigo-50 via-indigo-50" : "from-neutral-900 via-neutral-900"}  to-transparent blur-sm pointer-events-none z-20 rounded-2xl`}></div>

                            {/* Right Blur */}
                            <div className={`absolute top-1/2 -translate-y-1/2 inset-y-0 -right-4 w-16 bg-gradient-to-l ${!dark ? "from-indigo-50 via-indigo-50" : "from-neutral-900 via-neutral-900"} h-24 to-transparent blur-sm pointer-events-none z-20 rounded-2xl`}></div>
                        </div>
                        <div className=''>
                            <SmallText>TECH STACK</SmallText>
                            <h1 className='text-2xl flex flex-row items-center gap-1'>TECH I <BiHeart color='red'></BiHeart>
                            </h1>
                        </div>
                    </div>

                    <Card className="">
                        <button className=' flex flex-row gap-3 items-center justify-center text-center w-full lg:w-[400px]'>
                            <h1 className='text-2xl'>SEND ME A MESSAGE</h1>
                        </button>
                    </Card>
                </div>
                <Card>
                    <div className=''>
                        <SmallText>3 YEARS OF</SmallText>
                        <h1 className='text-2xl'>EXPERIENCE</h1>
                    </div>
                    <div className='flex flex-col gap-4 mt-5 text-2xl'>
                        <h1>BLA BLA BLA BLA BLA </h1>
                    </div>
                </Card>
            </section>
            <section className='flex flex-col justify-center items-center px-5'>
                <div className={`${!dark ? "bg-indigo-50 border-white text-black" : "bg-neutral-900 border-white/10 text-white"} border-[1px] rounded-3xl w-full sm:w-fit`}>
                    <div className='p-4   rounded-3xl gap-5 flex w-full justify-between sm:hidden'>
                        <button onClick={() => onCategoryClick("ai")} className={`${ai && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>AI</button>
                        <button onClick={() => onCategoryClick("sd")} className={`${sd && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>Software</button>
                        <button onClick={() => onCategoryClick("iot")} className={`${iot && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>IoT</button>
                        <button onClick={() => onCategoryClick("other")} className={`${other && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>Other</button>
                    </div>

                    <div className='p-4  lg:w-fit sm:w-fit  rounded-3xl gap-5 sm:flex   w-full justify-between hidden'>
                        <button onClick={() => onCategoryClick("ai")} className={`${ai && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>Artificial Intelligence</button>
                        <button onClick={() => onCategoryClick("sd")} className={`${sd && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>Software Development</button>
                        <button onClick={() => onCategoryClick("iot")} className={`${iot && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>Internet of Things</button>
                        <button onClick={() => onCategoryClick("other")} className={`${other && (dark ?"bg-gradient-to-br from-white/20 to-transparent border-[1px] border-white/10":"bg-gradient-to-br from-white to-transparent shadow-lg")} rounded-2xl   p-4`}>Other</button>
                    </div>
                </div>
                <div className='flex flex-wrap gap-5 mt-10 justify-center   '>
                    {ai && projectData.filter((project: any) => project.category.includes("AI")).map((project: any, index: number) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            github={project.github}
                            website={project.website}
                        />
                    ))}
                    {sd && projectData.filter((project: any) => project.category.includes("SD")).map((project: any, index: number) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            github={project.github}
                            website={project.website}
                        />
                    ))}
                    {iot && projectData.filter((project: any) => project.category.includes("IoT")).map((project: any, index: number) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            github={project.github}
                            website={project.website}
                        />
                    ))}
                    {other && projectData.filter((project: any) => project.category.includes("OTHER")).map((project: any, index: number) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            github={project.github}
                            website={project.website}
                        />
                    ))}

                </div>
            </section>

        </div>
    )
}

export default Home