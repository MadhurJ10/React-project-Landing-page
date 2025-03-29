import React from 'react'
import Button from './Button'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Nav = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".navpart1 , .navpart2" , {
            y:-40,
            opacity:0,
            delay:0.3,
            duration:0.7,
        })
        
    })
    return (
        <div className='flex px-[70px] py-[15px] justify-between items-center font-semibold'>
            <div className='navpart1 flex gap-[5px]'>
                <i className="ri-shining-2-fill text-4xl  rotate-[45deg] inline-block"></i>
                <h1 className='text-3xl'>WizardZ</h1>
            </div>
            <div className="navpart2 flex gap-[50px] items-center">
                <h4>About us</h4>
                <h4>Services</h4>
                <h4>Use Cases</h4>
                <h4>Pricing</h4>
                <h4>Blogs</h4>
                <Button bgcolor={"white"} textcolor={"black"} inner={"Request a quote"} />
            </div>
        </div>
    )
}

export default Nav
