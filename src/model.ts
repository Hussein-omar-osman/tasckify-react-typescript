export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
export type Action =
  | { type: 'add'; payLoad: string }
  | { type: 'remove'; payLoad: number }
  | { type: 'done'; payLoad: number }
  | { type: 'edit'; payLoad: { id: number; edit: string } };
