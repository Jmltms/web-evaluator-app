export type ActionState = {
    message: string;
    success?: boolean;
    errors?: string
};
export type TaskType = {id: number, isDone: boolean, title: string}