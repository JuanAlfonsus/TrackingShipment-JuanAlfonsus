import PetDoorz from '../assets/petdoorzAsset 3.png'
import Cinemind from '../assets/cinemind.png'
import HorizontalLine from './HorizontalLine'
import Express from '../assets/express.svg'
import ReactNative from '../assets/react-native.svg'
import Expo from '../assets/expo.svg'
import Postgre from '../assets/postgre.svg'
import Graphql from '../assets/graphql.svg'

export default function Project({ scrollToRef }) {

    return (
        <>
            <div className='animate__animated animate__fadeIn mt-5'>
                <div className="gap-5">
                    {/* per project */}

                    <div className="mt-5 flex flex-col items-center" ref={scrollToRef}>
                        <img src={PetDoorz} alt="" className=' h-[250px]' />
                        <p className=' text-xl'>A mobile based app where use can find nearest pet hotel</p>
                        <div className=' flex flex-row gap-8 mt-5 mb-5'>
                            <img src={Express} alt="Express js" className='w-20 opacity-30' />
                            <img src={ReactNative} alt="Express js" className='w-20 opacity-30' />
                            <img src={Expo} alt="Express js" className='w-20 opacity-30' />
                            <img src={Postgre} alt="Express js" className='w-20 opacity-30' />
                        </div>
                        <div className='flex items-center gap-5 mt-5'>
                            <a href="https://drive.google.com/file/d/14va6VDqCneojiS3EvmHSaO_TnJnXtoqs/view" target='_blank'>
                                <i className="fa-solid fa-globe text-2xl" style={{ color: '#253e6a' }}></i>
                            </a>
                            <a href="https://github.com/JuanAlfonsus" target='_blank'>
                                <i className="fa-brands fa-github text-2xl" style={{ color: '#253e6a' }}></i>
                            </a>
                        </div>
                    </div>

                    <HorizontalLine />

                    <div className="mt-5 flex flex-col items-center">
                        <img src={Cinemind} alt="" className=' h-[250px]' />
                        <p className=' text-xl'>A mobile and web based application to display movies</p>
                        <div className=' flex flex-row gap-8 mt-5 mb-5'>
                            <img src={Express} alt="Express js" className='w-20 opacity-30' />
                            <img src={ReactNative} alt="Express js" className='w-20 opacity-30' />
                            <img src={Expo} alt="Express js" className='w-20 opacity-30' />
                            <img src={Postgre} alt="Express js" className='w-20 opacity-30' />
                            <img src={Graphql} alt="Express js" className='w-20 opacity-30' />
                        </div>
                        <div className='flex items-center gap-5 mt-5'>
                            <a href="https://github.com/JuanAlfonsus" target='_blank'>
                                <i className="fa-solid fa-globe text-2xl" style={{ color: '#253e6a' }}></i>
                            </a>
                            <a href="https://github.com/JuanAlfonsus" target='_blank'>
                                <i className="fa-brands fa-github text-2xl" style={{ color: '#253e6a' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}