import { useState } from 'react';
import CustomButton from './CustomButton'
import CarDetails from './CarDetails';
import { calculateCarRent } from '../utils'

import carImg from "../assets/hero.png"
import steeringWheel from "../assets/steering-wheel.svg"
import tire from "../assets/tire.svg"
import gas from "../assets/gas.svg"
import rightArrow from "../assets/right-arrow.svg"

const CarCard = ({ car }) => {
    const { city_mpg, year, make, model, transmission, drive } = car
    const carRent = calculateCarRent(city_mpg, year)

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='group flex flex-col p-6 justify-center items-start text-black bg-gray-100 hover:bg-white hover:shadow-md rounded-3xl'>
            <div className='w-full flex justify-between items-start gap-2'>
                <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className=' self-start text-[14px] font-semibold'>
                    $
                </span>
                {carRent}

                <span className=' self-end text-[14px] font-medium'>
                    /day
                </span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <img src={carImg} width={250} alt="car modal" className=' object-contain mx-auto' />
            </div>

            <div className='relative flex w-full mt-2'>

                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src={steeringWheel} width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <img src={tire} width={20} height={20} alt="seat" />
                        <p className="text-[14px] leading-[17px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <img src={gas} width={20} height={20} alt="seat" />
                        <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon={rightArrow}
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard