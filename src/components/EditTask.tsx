import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import { Input } from "./ui/input";
import type { ActionState, TaskType } from "@/lib/type";
import { EditTaskCreated } from "@/lib/action";
import { Checkbox } from "./ui/checkbox";

const EditTask = ({ id, isDone, title }: TaskType) => {
  const [state, formAction, isPending] = React.useActionState<
    ActionState,
    FormData
  >(EditTaskCreated, { message: "" });

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon-sm" disabled={isDone}>
            <Pencil />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="center">
          <form action={formAction} className="space-y-3">
            <div>
              <input type="hidden" name="id" value={id} />
              <label
                htmlFor="task"
                className="text-sm font-bold text-neutral-600"
              >
                Your Task
              </label>
              <Input
                type="text"
                name="task"
                placeholder="Your task."
                defaultValue={title}
              />
              {state.errors && (
                <p className="text-sm text-red-500 font-medium">
                  {state.errors}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="done" name="isDone" defaultChecked={isDone} />
              <label
                htmlFor="done"
                className="text-xs text-neutral-600 font-medium"
              >
                Mark as done.
              </label>
            </div>
            <Button
              variant="secondary"
              disabled={isPending}
              className="rounded mt-5 bg-neutral-200 hover:bg-neutral-300"
              size="sm"
            >
              Update Task
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default EditTask;
