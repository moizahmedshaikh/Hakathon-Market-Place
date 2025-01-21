"use client"
import HeroLinks from '@/components/HeroLinks'
import Nav2 from '@/components/Nav2'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SignIn = () => {
  return (
    <div>
    <Nav2/>
    <HeroLinks heading='Sign In' url1='Home' url2='Singin'/>

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-[424px] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl Headings font-semibold text-gray-800 mb-6">Sign In</h2>
        <form onSubmit={(e)=>{e.preventDefault()}} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="remember" className="ml-2 text-gray-600 text-sm">Remember me?</label>
          </div>
          {/* Submit Button */}
          <button
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {/* <Link href='/signup'> */}
            <Link href={"/signup"}>Sign Up</Link>
            Sign Up
          </button>
        </form>
        {/* Forget Password */}
        <p className="text-right mt-2">
          <a href="#" className="text-sm text-orange-500 hover:underline">Forgot password?</a>
        </p>
        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        {/* Social Sign In */}
        <div className="space-y-3">
          <button
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-600 hover:bg-gray-100"
          >
            <Image
            height={1000}
            width={1000}
              src="/google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
          <button
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-600 hover:bg-gray-100"
          >
            <Image
            height={1000}
            width={1000}
              src="/Apple.png"
              alt="Apple"
              className="w-5 h-5 mr-2"
            />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
        </div>
  )
}

export default SignIn 