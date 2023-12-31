import { useEffect, useRef, useState } from 'react'
import Foto from '../assets/foto.png'
import BlueCircle from '../components/BlueCircle'
import 'animate.css'
import Project from '../components/Project'

export default function AboutMeView() {
    const [show, setShow] = useState(false)

    const scrollToRef = useRef()

    // function to set show
    const handleShow = () => {
        setShow(!show)
    }

    useEffect(() => {
        if (show) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [show])

    return (
        <>
            <section className="flex justify-center align-middle mt-10 pb-10">
                <div className="bg-white w-2/3 rounded shadow-lg overflow-clip flex flex-col p-14 relative ">
                    <BlueCircle position={'leftUp'} />
                    <BlueCircle position={'rightBottom'} />
                    <div className="grid grid-cols-2">
                        <div className=" flex justify-center">
                            <img src={Foto} alt="foto" className="animate__animated animate__fadeInLeft" />
                        </div>
                        <div>
                            <div className='text-center animate__animated animate__fadeInDown'>
                                <h1 className=' font-lilito text-6xl text-gray-600'>Juan Alfonsus</h1>
                                <h1 className=' font-lilito text-3xl text-gray-500'>Fullstack Developer</h1>
                            </div>
                            <div className='mt-6 text-justify text-xl animate__animated animate__fadeInUp'>
                                <p className='z-10'>I hooked at programming when I was in a high school. And began my programming journey at
                                    Gunadarma University, where I studied Informatics Engineering. After graduated, I continued my
                                    programming education by completing Hacktiv8 bootcamp as a full-stack javascript developer. I
                                    always eager to learn new things and seeking a challenging position in the tech industry, where I can
                                    use my skills and passion to make a positive impact. That's all thankyou!</p>
                            </div>
                            <div className='flex justify-center mt-10 gap-10 animate__animated animate__fadeInUp'>
                                <a href="https://www.linkedin.com/in/juannalfonsus/" target='_blank'>
                                    <i className="fa-brands fa-linkedin text-4xl" style={{ color: '#253e6a' }}></i>
                                </a>
                                <a href="https://github.com/JuanAlfonsus" target='_blank'>
                                    <i className="fa-brands fa-github text-4xl" style={{ color: '#253e6a' }}></i>
                                </a>
                                <a href="https://www.facebook.com/" target='_blank'>
                                    <i className="fa-brands fa-facebook text-4xl" style={{ color: '#253e6a' }}></i>
                                </a>
                                <a href="https://www.instagram.com/juannalfonsus" target='_blank'>
                                    <i className="fa-brands fa-instagram text-4xl" style={{ color: '#253e6a' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {
                        show ? <Project scrollToRef={scrollToRef} /> : ''
                    }

                    <div className='flex flex-col items-center mt-10' onClick={handleShow}>
                        {
                            show ? 
                            <span className=' text-2xl hover:cursor-pointer text-gray-600'>Show Less! <i className="fa-solid fa-arrow-up"></i> </span>
                            : 
                            <span className=' text-2xl hover:cursor-pointer text-gray-600 '>Show More! <i className="fa-solid fa-arrow-down"></i> </span>
                        }                        
                    </div>
                </div>


                {/* show more */}
            </section>
        </>
    )
}