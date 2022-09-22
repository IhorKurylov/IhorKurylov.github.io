export interface Task {
  title: string;
  id: string;
  description: string;
  status: Status;
  subtasks?: Subtask[];
}

export enum Status {
  inList,
  done,
}

export interface Subtask {
  id: string;
  title: string;
  status: Status;
}
