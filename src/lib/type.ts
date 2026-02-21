export type ActionState = {
    message: string;
    success?: boolean;
    errors?: string
};
export interface Task {isDone: boolean, task: string}