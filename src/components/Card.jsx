import React from 'react'

const Card = (param) => {
    return (
    <div className={` w-[540px] h-[200px] flex shrink-0 border rounded-2xl text-2xl px-[45px] py-[30px] justify-between shadow-[0px_15px_0px_black]`}>
            <div className='cardleft flex flex-col justify-between'>
                <h1 className='bg-[#B9FF66]'>{param.text}</h1>
                <div className='flex '>
                    <i class="ri-arrow-right-circle-fill"></i>
                    <h3>Learn more</h3>
                </div>
            </div>
            <div className='cardright  flex items-center '>
                <img className='w-[350px]' src="https://cdni.iconscout.com/illustration/premium/thumb/internet-search-illustration-download-in-svg-png-gif-file-formats--find-explore-magnifying-glass-tokyo-pack-seo-web-illustrations-2006567.png" alt={"ehhe"} />

            </div>
        </div>
    )
}

export default Card

// https://cdni.iconscout.com/illustration/premium/thumb/internet-search-illustration-download-in-svg-png-gif-file-formats--find-explore-magnifying-glass-tokyo-pack-seo-web-illustrations-2006567.png