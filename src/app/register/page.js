import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <section className='mt-8'>
      <h1 className='text-primary text-4xl text-center mb-4'>Register</h1>
      <form className='block max-w-sm mx-auto'>
        <input type="email" placeholder='email' className='input'/>
        <input type="password" placeholder='password' className='input'/>
        <button type="submit" className='submit'>Register</button>
        <div className='my-4 text-center text-gray-500'>
            or login with provider
        </div>
        <button className='flex items-center justify-center gap-4'>
            <Image src={'/google.png'} width={24} height={24} alt=''/>
            Login with Google</button>
      </form>
    </section>
  )
}

export default page
