import React from 'react'
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Pencil } from 'lucide-react'
import { Input } from './ui/input'
import type { TaskType } from '@/lib/type'

const EditTask = ({id, isDone, title}: TaskType) => {
  return (
    <>
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon-sm" disabled={isDone}><Pencil /></Button>
      </PopoverTrigger>
      <PopoverContent align="center">
        <div>
            <label htmlFor="task" className='text-sm font-bold text-neutral-600'>Your Task</label>
            <Input type='text' placeholder='Your task.' defaultValue={title} />
        </div>
        <Button variant="secondary" className='rounded mt-5 bg-neutral-200 hover:bg-neutral-300' size='sm'>Update Task</Button>
      </PopoverContent>
    </Popover>
    </>
  )
}

export default EditTask