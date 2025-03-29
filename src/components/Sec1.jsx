import React from 'react'
import Button from './Button'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Sec1 = () => {
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.from(".sec1part1" , {
            x:-50,
            delay:1,
            opacity:0,
            duration:1,
        })
        
        tl.from(".sec1part2" , {
            x:50,
            opacity:0,
            duration:1
        } ,"-=-0.3")

        tl.from(".moving" , {
            y:50,
            opacity:0,
            duration:0.5
        } ,)
    })

    return (
        <div className='w-screen h-[515px]  px-[70px] py-[15px]'>
            <div className='part1 flex justify-between'>
                <div className='sec1part1 flex flex-col gap-[20px]'>
                    <h1 className='text-6xl tracking-wide leading-[70px] font-[neue]'>Navigating the <br /> digital landscape <br /> for success</h1>
                    <p className='text-[20px]'>Our digital marketing agencyhelp bussinesses <br /> grow and succeed online through a range of <br /> services including SEO,PPC,social media <br /> and content creation.</p>
                    <Button bgcolor={"black"} textcolor={"white"}  inner={"Book a consultant"} />
                {/* <Button bgcolor="black" textcolor="" inner={"Request a quote"} /> */}

                </div>
                <div class="sec1part2">
                    <img src="https://makarios.in/wp-content/uploads/2023/10/Illustration-1.png" alt="ero" className='h-[450px]' />
                </div>
            </div>
            <div className='moving flex flex-row  px-0 py-0 mt-[-30px] justify-between overflow-y-hidden'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCXXAw3rcCdT2YcTo2YSok9FgenGfbitWDA&s" alt="" />
                <img src="https://logovectordl.com/wp-content/uploads/2021/11/dribbble-logo-vector.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaylAf0UItzqmgzQ8vHJU_26aftHPWnMYUiA&s" alt="" />
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-notion-icon-download-in-svg-png-gif-file-formats--logo-social-media-pack-logos-icons-1911999.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNC7NypT169LYktMtrQfFDLM5-1Ce-7Y53g&s" alt="" />
            </div>
        </div>
    )
}

export default Sec1
