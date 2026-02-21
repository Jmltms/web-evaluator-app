import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { HandleSignup } from '@/lib/action'
import { useTogglePassword } from '@/lib/hooks'
import type { ActionState } from '@/lib/type'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [state, formAction, isPending] = React.useActionState<ActionState, FormData>(HandleSignup,  { message: '' })
  const { type, togglePassword } = useTogglePassword()
  const navigate = useNavigate();


  // when signup success navigate to this path
  if (state?.success) {
        navigate("/task")
    }
  return (
    <Container >
        <div className='shadow w-lg p-5 rounded-lg'>
            <h3 className='text-4xl font-medium text-neutral-800 text-center font-sans'>Sign Up</h3>
            <div className='mt-5'>
                {state.message && <p className='text-sm text-green-500 font-medium text-center'>{state.message}</p>}
                {state.errors && <p className='text-sm text-red-500 font-medium text-center'>{state.errors}</p>}
            </div>
            <form action={formAction}>
              <div className='mt-5 px-10 space-y-5'>
                  <div>
                      <label htmlFor="email" className='text-sm text-neutral-600 font-bold'>Email:</label>
                      <Input type="email" id="email" name="email" placeholder='Enter your email' required/>
                  </div>
                  <div>
                      <label htmlFor="password" className='text-sm text-neutral-600 font-bold'>Password:</label>
                      <Input type={type} id="password" name="password" placeholder='Enter your password' required/>
                  </div>
                  <div className='flex items-center gap-2'>
                      <Checkbox id="showpass" onClick={togglePassword}/>
                      <label htmlFor="showpass" className='text-xs text-neutral-500 font-bold'>Show Password</label>
                  </div>
                  <div>
                      <label htmlFor="confirmpassword" className='text-sm text-neutral-600 font-bold'>Confirm Password:</label>
                      <Input type="password" id="confirmpassword" name="confirmpassword" placeholder='Enter confirm password' required/>
                  </div>
                  <Button className='w-full mt-5' type='submit' disabled={isPending}>Sign Up</Button>
                  <div className='flex justify-center items-center mt-3'>
                      <p className='text-sm text-neutral-500'>Dont have account signup</p>
                      <Button variant="link"  onClick={() => navigate("/")}>Login</Button>
                  </div>
              </div>
            </form>
        </div>
    </Container>
  )
}

export default Signup