import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const AddTask = () => {
  return (
    <>
        <div className='my-5'>
            <div>
                <label htmlFor="task" className='text-sm font-bold text-neutral-600'>New Task</label>
                <Input type='text'/>
            </div>
            <Button variant="secondary" className='rounded mt-5 bg-neutral-200 hover:bg-neutral-300' size='sm'>Add Task</Button>
        </div>
    </>
  )
}

export default AddTask