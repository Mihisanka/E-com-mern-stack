import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const Login = ()=> {
    const [showPassword,setShowPassword]= useState(false)
  return (
    <section id='loin'>
        <div className='mx-auto container p-4 '>
            <div className='bg-white-300 p-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt='login icons'/>
                </div>

                <form>
                    <div className='flex flex-col mb-4 justify-center items-center p-2'>
                        <label className='text-lg font-bold mb-2'>Email</label>
                        <div className='bg-slate-100 p-2 flex w-full justify-center p-2 items-center'>
                            <input type='email' placeholder='Enter email' />
                        </div>
                    </div>

                    <div className='flex flex-col mb-4 justify-center p-2 items-center'>
                        <label className='text-lg font-bold mb-2'>Password</label>
                        <div className='bg-slate-100 p-2 flex w-full justify-center p-2 items-center'>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' />
                            <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                                <span>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                        </div>
                        <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                    Forgot password ?
                                </Link>
                    </div>

                    <button className='justify-center items-center bg-blue-500 text-white w-full rounded-full h-15'>Login</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login
