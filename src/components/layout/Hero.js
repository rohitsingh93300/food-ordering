import Image from 'next/image'
import React from 'react'
import Right from '../icons/Right'

const Hero = () => {
    return (
        <section className='hero'>
           
             {/* text */}
             <div className='py-12'>
                <h1 className='text-4xl font-semibold'>
                    Everything<br/> 
                    is better<br/>
                     with a&nbsp; 
                <span className='text-primary '>
                  Pizza
                </span>
                </h1>
                <p className='text-gray-500 my-6'>Pizza is the missing that makes every day complete, a simple yet delicious joy in life.</p>
                <div className='flex gap-4 items-center'>
                    <button className='px-6 py-2 bg-primary text-white rounded-full flex gap-2'>
                        Order Now
                        <Right/>
                        </button>
                    <button className='flex gap-2 py-2 text-gray-600 font-semibold'>
                        Learn More
                        <Right/>
                        </button>
                </div>
            </div>
            {/* image */}
            <div className='relative '>
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt='' />
            </div>
        

        </section>
    )
}

export default Hero
