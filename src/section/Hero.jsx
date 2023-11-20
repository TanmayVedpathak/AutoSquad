import React from 'react'

import Button from '../components/Button';
import carImg from "../assets/car.png"
import heroBg from "../assets/hero-bg.png"

const Hero = () => {
    return (
        <div className=' min-h-[80vh] md:px-16 px-6 md:mt-0 mt-6 mb-14 flex flex-wrap md:flex-row flex-col justify-between items-center overflow-hidden'>
            <div className=' md:w-2/5 w-full'>
                <h1 className=' md:w-96 w-full sm:text-5xl text-3xl font-semibold mb-4'>Find, book, rent a car - quick and super easy!</h1>
                <p className=' sm:text-xl text-md text-zinc-700 mb-8'>Streamline your car rental experience with our effortless booking process</p>
                <Button content="Explore Cars" />
            </div>
            <div className='  md:w-[50%] w-full relative flex flex-col justify-center items-center'>
                <img className=' w-[80%]' src={carImg} alt="car-image" />
                <img className=' w-full absolute sm:block hidden -z-10' src={heroBg} alt="hero-bg" />
            </div>
        </div>
    )
}

export default Hero