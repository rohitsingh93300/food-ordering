'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function page() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loader, setLoader] = useState(false)
  // const [error, setError] = useState(false)

  const handleFormSubmit =async(e)=>{
    e.preventDefault();
    setLoader(true)
    await signIn('credentials',{email,password})
    setLoader(false)
  }
  return (
    <section className='mt-8'>
    <h1 className='text-primary text-4xl text-center mb-4'>Login</h1>
    {/* {error && (
      <div className='text-center my-4'>
        An error has occured, please try again later
      </div>
    )} */}
    <form className='block max-w-sm mx-auto' onSubmit={handleFormSubmit}>
      <input type="email" disabled={loader} name="email"  placeholder='email' className={`input ${loader?'disabled':""}`} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" disabled={loader} name="password" placeholder='password' className={`input ${loader?'disabled':""}`} onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit" disabled={loader} className='submit'>Login</button>
      <div className='my-4 text-center text-gray-500'>
          or login with provider
      </div>
      <button type="button"
      onClick={()=>signIn('google')}
      className='flex items-center justify-center gap-4'>
          <Image src={'/google.png'} width={24} height={24} alt=''/>
          Login with Google</button>
          <div className='text-center my-4 text-gray-500'>
            Don't have an account?{' '}<Link className='underline' href={'/register'}>Register here &raquo;</Link>
          </div>
    </form>
  </section>
  )
}

export default page
