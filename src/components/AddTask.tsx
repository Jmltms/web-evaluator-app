import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import type { ActionState } from '@/lib/type'
import { CreateTask } from '@/lib/action'

const AddTask = () => {
        const [state, formAction, isPending] = React.useActionState<ActionState, FormData>(CreateTask,  { message: '' })
    
  return (
    <>
        <div className='my-5'>
            {state.errors && <p className='text-sm text-red-500 font-medium text-center'>{state.errors}</p>}
            {state.message && <p className='text-sm text-green-500 font-medium text-center'>{state.message}</p>}
            <form action={formAction}>
                <div>
                    <label htmlFor="task" className='text-sm font-bold text-neutral-600'>New Task</label>
                    <Input type='text' name="task"/>
                </div>
                <Button type='submit' disabled={isPending} variant="secondary" className='rounded mt-5 bg-neutral-200 hover:bg-neutral-300' size='sm'>Add Task</Button>
            </form>
        </div>
    </>
  )
}

export default AddTask