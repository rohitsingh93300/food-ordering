'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function page() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loader, setLoader] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [error, setError] = useState(false)
  const handleFormSubmit=async(e)=>{
    e.preventDefault();
    setLoader(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch ('/api/register',{
      method:"POST",
      body: JSON.stringify({email,password}),
      headers:{'Content-Type': 'application/json'},      
    });
    if(response.ok){
      setUserCreated(true)
    }else{
      setError(true)
    }
    setLoader(false)

  }
  return (
    <section className='mt-8'>
      <h1 className='text-primary text-4xl text-center mb-4'>Register</h1>
      {userCreated && (
        <div className='text-center my-4'>
          User created. Now you can <Link href={'/login'} className='underline' >Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className='text-center my-4'>
          An error has occured, please try again later
        </div>
      )}
      <form className='block max-w-sm mx-auto' onSubmit={handleFormSubmit}>
        <input type="email" disabled={loader}  placeholder='email' className={`input ${loader?'disabled':""}`} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" disabled={loader} placeholder='password' className={`input ${loader?'disabled':""}`} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" disabled={loader} className='submit'>Register</button>
        <div className='my-4 text-center text-gray-500'>
            or login with provider
        </div>
        <button 
        onClick={()=>signIn('google')}
        className='flex items-center justify-center gap-4'>
            <Image src={'/google.png'} width={24} height={24} alt=''/>
            Login with Google</button>
            <div className='text-center my-4 text-gray-500'>
              Existing account?{' '}<Link className='underline' href={'/login'}>Login here &raquo;</Link>
            </div>
      </form>
    </section>
  )
}

export default page
