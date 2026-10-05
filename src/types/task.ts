// A single to-do item. Defining this as a TypeScript type is what lets the
// compiler catch mistakes (e.g. forgetting `completed`) anywhere a Task is
// created or used.
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
