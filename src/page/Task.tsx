import AddTask from "@/components/AddTask";
import DeleteTask from "@/components/DeleteTask";
import EditTask from "@/components/EditTask";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FetchTask } from "@/lib/action";
import type { TaskType } from "@/lib/type";
import { LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = React.useState<TaskType[]>([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const loadTasks = async () => {
      const data = await FetchTask(userId);
      setTasks(data);
    };

    loadTasks();
  }, [tasks]);

  const userName = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Container>
        <div>
          <h1 className="text-4xl font-medium text-neutral-800 text-center font-sans">
            📝 React Task Evaluator
          </h1>
          <div className="flex justify-end items-center gap-3 mt-5 mb-2">
            <p className="text-sm">Hello {userName}</p>
            <Button
              size="icon-xs"
              className="bg-neutral-400"
              onClick={handleLogout}
            >
              <LogOut strokeWidth={2.5} />
            </Button>
          </div>
          <div className="shadow w-lg px-5 py-3 rounded-lg mb-5">
            <AddTask />
            <div>
              <p className="border-b pb-2 font-medium text-neutral-600">
                List of tasks.
              </p>
              <ul className="mt-3 space-y-7 p-2">
                {tasks.map((task) => (
                  <div key={task.id}>
                    <li className="list-disc mx-4">
                      <div className="flex justify-between items-center font-semibold py-3">
                        {task.isDone ? "✅" : "❌"} {task.title}
                        <div className="space-x-3 ">
                          <EditTask {...task} />
                          <DeleteTask {...task} />
                        </div>
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
  );
};

export default Task;
