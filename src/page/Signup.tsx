import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { useTogglePassword } from '@/lib/hooks'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const { type, togglePassword } = useTogglePassword()
  const navigate = useNavigate();

  return (
    <Container className="flex justify-center items-center mt-10">
        <div className='shadow w-lg p-5 rounded-lg'>
            <h3 className='text-4xl font-medium text-neutral-800 text-center font-sans'>Sign Up</h3>
            
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
                    <label htmlFor="showpass" className='text-xs text-neutral-500 font-bold'>Show Password</label>
                </div>
                <div>
                    <label htmlFor="confirmpassword" className='text-sm text-neutral-600 font-bold'>Confirm Password:</label>
                    <Input type="password" id="confirmpassword" name="confirmpassword" placeholder='Enter confirm password'/>
                </div>
                <Button className='w-full mt-5'>Sign Up</Button>
                <div className='flex justify-center items-center mt-3'>
                    <p className='text-sm text-neutral-500'>Dont have account signup</p>
                    <Button variant="link"  onClick={() => navigate("/")}>Login</Button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Signup