import AddTask from '@/components/AddTask'
import EditTask from '@/components/EditTask'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Container } from '@/components/ui/container'
import { FetchTask } from '@/lib/action'
import type { TaskType } from '@/lib/type'
import { Trash2 } from 'lucide-react'
import React, { useEffect } from 'react'

const Task = () => {
  const  [tasks, setTasks] = React.useState<TaskType[]>([])
  useEffect(() => {
    const loadTasks = async () => {
      const data = await FetchTask(1)
      setTasks(data.task)
    }

    loadTasks()
  }, [])
  console.log(tasks);
  



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
              <div key={task.id}>
                <li className='list-disc'>
                    <div className='flex justify-between items-center font-semibold'>
                      {task.isDone ? '✅' : '❌'} {task.title}
                      <div className='space-x-3'>
                        <EditTask {...task}/>
                        <Button size="icon-sm" variant="destructive"><Trash2 /></Button>
                      </div>
                    </div>
                    <div className='flex items-center gap-2 '>
                      <Checkbox id='done' defaultChecked={task.isDone}/>
                      <label htmlFor="done" className='text-xs text-neutral-600'>Mark as done.</label>
                    </div>
                </li>
                </div>
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