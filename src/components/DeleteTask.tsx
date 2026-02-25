import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import type { ActionState, TaskType } from "@/lib/type";
import { DeleteTaskCreated } from "@/lib/action";

const DeleteTask = ({ id, title }: TaskType) => {
  const [state, formAction, isPending] = React.useActionState<
    ActionState,
    FormData
  >(DeleteTaskCreated, { message: "" });

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon-sm" variant="destructive">
            <Trash2 />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <p className="text-lg font-medium">Delete Task</p>
          <p className="text-sm text-neutral-600">
            Are you sure you want to delete task?
          </p>
          <p className="font-bold text-sm">"{title}"</p>
          <form action={formAction} className="space-y-3">
            <div>
              <input type="hidden" name="taskId" value={id} />
              {state.errors && (
                <p className="text-sm text-red-500 font-medium">
                  {state.errors}
                </p>
              )}
            </div>
            <Button
              variant="secondary"
              disabled={isPending}
              className="rounded mt-5 bg-neutral-200 hover:bg-neutral-300"
              size="sm"
            >
              Delete
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DeleteTask;
