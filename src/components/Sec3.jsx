import React from 'react'
import Button from './Button'

const Sec3 = () => {
    return (
        <div className=' px-[70px] py-[15px]'>
            <div className='sec3part1 flex bg-[#f0f0f0] justify-between px-[45px] py-[15px] rounded-2xl '>
                <div className='flex flex-col gap-[15px]'>
                    <h1 className='text-3xl font-semibold'>Let's make things happen</h1>
                    <p>Contact us today to learn more about how our digital <br /> marketing services can help your bussiness grow <br /> and succed online.</p>
                    <Button bgcolor={"black"} textcolor={"white"} inner={"Get your free proposal"} />
                </div>
                <div className='mr-[40px]'>
                    <img className='w-[250px]' src="https://cdn.prod.website-files.com/6491c6f67cd22366fdc73f83/6491de708cef894980a39679_IllustrationCTA.svg" alt="" />
                </div>
            </div>
            <div className='sec3part2 flex gap-[20px] mt-[60px] '>
                <h1 className='text-3xl px-[10px] py-[5px] bg-[#B9FF66]'>Case study</h1>
                <p className='leading-[25px]'>Explore real-life example of our provenDigital marketing success <br /> throught our case study. </p>
            </div>
            <div className='sec3part3 bg-[#1F1F1F] h-[200px] flex justify-evenly items-center text-white mt-[40px] rounded-4xl'>
                <div className='flex flex-col gap-2'>
                    <p>Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit. Eius qui, tempore a est <br /> tempora sit id autem obcaecati corrupti. <br /> Recusandae quasi officia laborum facilis itaque!</p>
                    <div className='flex  text-[#B9FF66] gap-[2px] items-center'>
                    <h3>Learn more</h3>
                    <i className="ri-arrow-right-up-line text-[25px]"></i>
                </div>
                </div>
                <div className='line h-[140px] w-[1px] bg-white'></div>
                <div className='flex flex-col gap-2'>
                    <p>Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit. Eius qui, tempore a est <br /> tempora sit id autem obcaecati corrupti. <br /> Recusandae quasi officia laborum facilis itaque!</p>
                    <div className='flex text-[#B9FF66] gap-[2px] items-center'>
                    <h3>Learn more</h3>
                    <i class="ri-arrow-right-up-line text-[25px]"></i>
                </div>
                </div>
                <div className='line h-[140px] w-[1px] bg-white'></div>

                <div className='flex flex-col gap-2'>
                    <p>Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit. Eius qui, tempore a est <br /> tempora sit id autem obcaecati corrupti. <br /> Recusandae quasi officia laborum facilis itaque!</p>
                    <div className='flex text-[#B9FF66] gap-[2px] items-center'>
                    <h3>Learn more</h3>
                    <i class="ri-arrow-right-up-line text-[25px]"></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Sec3
