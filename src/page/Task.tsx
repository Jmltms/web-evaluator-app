import AddTask from '@/components/AddTask'
import EditTask from '@/components/EditTask'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const Task = () => {
  const tasks = [
    {
      id:1,
      title: "Task 1",
      isDone: false
    },
    {
      id:2,
      title: "Task 2",
      isDone: false
    },
    {
      id:3,
      title: "Task 3",
      isDone: true
    },
  ]
  return (
    <>
    <Container >
      <div >
        <h1 className='text-4xl font-medium text-neutral-800 text-center font-sans'>📝 React Task Evaluator</h1>
        <div className='shadow w-lg px-5 py-3 rounded-lg mt-10'>
          <AddTask />
          <div>
            <p className='border-b pb-2 font-medium text-neutral-600'>List of tasks.</p>
            <ul className='mt-3 space-y-7 p-2'>
              {tasks.map((task) => (
                <>
                <li key={task.id} className='list-disc'>
                    <div className='flex justify-between items-center font-semibold'>
                      {task.isDone ? '✅' : '❌'} {task.title}
                      <div className='space-x-3'>
                        <EditTask isDone={task.isDone} task={task.title}/>
                        <Button size="icon-sm" variant="destructive"><Trash2 /></Button>
                      </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                      <Checkbox id='done' defaultChecked={task.isDone}/>
                      <label htmlFor="done" className='text-xs text-neutral-600'>Mark as done.</label>
                    </div>
                </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Task