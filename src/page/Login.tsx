import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { useTogglePassword } from '@/lib/hooks'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { type, togglePassword } = useTogglePassword()


  return (
    <>
    <Container className="flex justify-center items-center mt-10">
        <div className='shadow w-lg p-5 rounded-lg'>
            <h3 className='text-4xl font-medium text-neutral-800 text-center font-sans'>Login</h3>
            
            <div className='mt-10 px-10 space-y-5'>
                <div>
                    <label htmlFor="email" className='text-sm text-neutral-600 font-bold'>Email:</label>
                    <Input type="email" id="email" name="email" placeholder='Enter your email'/>
                </div>
                <div>
                    <label htmlFor="password" className='text-sm text-neutral-600 font-bold'>Password:</label>
                    <Input type={type} id="password" name="password" placeholder='Enter your password'/>
                </div>
                <div className='flex items-center gap-2'>
                    <Checkbox id="showpass" onClick={togglePassword}/>
                    <label htmlFor="showpass" className='text-xs text-neutral-500 font-medium'>Show Password</label>
                </div>
                <Button className='w-full mt-5'>Login</Button>
                <div className='flex justify-center items-center mt-3'>
                    <p className='text-sm text-neutral-500'>Dont have account signup</p>
                    <Button variant="link"  onClick={() => navigate("/signup")}>Sign up</Button>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Login