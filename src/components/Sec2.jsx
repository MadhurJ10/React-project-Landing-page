import React from 'react'
import Card from './Card'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Sec2 = () => {
    const tl = gsap.timeline()

    useGSAP(() => {
        tl.from(".service" , {
            x:-20,
            opacity:0,
            delay:3,
            duration:1
        })
    })

    return (
        <div className='sec2 px-[70px] py-[15px] tracking-wide'>
            <div className='service flex gap-[20px] mt-3'>
                <h1 className='text-3xl px-[10px] py-[5px] bg-[#B9FF66]'>Services</h1>
                <p className='leading-[25px]'>At our digital marketing agency , we offer a range of services to help <br /> bussiness grow succeed online. these services include</p>
            </div>
            <div className=' flex flex-wrap mt-[30px] justify-between gap-[40px]'>
                <Card text={"Search engine optamisatiom"} color={"blue"} url={"and"}/>
                <Card text={"Pay per click"} color={"black"} url={"and"}/>
                <Card text={"Social media marketing"} color={"black"} url={"and"}/>
                <Card text={"E-mail marketing"} color={"blue"} url={"and"}/>

            </div>

        </div>
    )
}

export default Sec2
