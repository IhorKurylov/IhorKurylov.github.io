import { Task } from "../interfaces/todoList.interface";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

export const defaultTasksList: Task[] = [
  {
    title: "Tasks creation management",
    id: uuidv4(),
    description: "Add and remove tasks",
    status: 0,
    subtasks: [
      {
        id: uuidv4(),
        title: "Add tasks",
        status: 0,
      },
      {
        id: uuidv4(),
        title: "Remove tasks",
        status: 0,
      },
    ],
  },
  {
    title: "Additional display info",
    id: uuidv4(),
    description: "Display a count of remaining incomplete tasks",
    status: 0,
    subtasks: [
      {
        id: uuidv4(),
        title: "Show counter",
        status: 1,
      },
      {
        id: uuidv4(),
        title: "Apply counter function",
        status: 0,
      },
    ],
  },
  {
    title: "Local data saving",
    id: uuidv4(),
    description: "Data should persisted using some form of browser storage",
    status: 0,
    subtasks: [
      {
        id: uuidv4(),
        title: "Create storage",
        status: 0,
      },
      {
        id: uuidv4(),
        title: "Update storage functionality",
        status: 0,
      },
    ],
  },
  {
    title: "Tasks display",
    id: uuidv4(),
    description: "Should display as a list of Task cards",
    status: 0,
    subtasks: [
      { id: uuidv4(), title: "Create Task Card", status: 0 },
      { id: uuidv4(), title: "Arrange display", status: 0 },
    ],
  },
  {
    title: "testing",
    id: uuidv4(),
    description: "Should have unit tests",
    status: 0,
    subtasks: [],
  },
  {
    title: "Task completion",
    id: uuidv4(),
    description:
      "Should be able to mark a task status as complete by clicking a checkbox",
    status: 0,
    subtasks: [{ id: uuidv4(), title: "Create update functions", status: 0 }],
  },
  {
    title: "Update",
    id: uuidv4(),
    description: "Should be able to update all criteria of a task",
    status: 0,
    subtasks: [
      {
        id: uuidv4(),
        title: "Should show title as crossed out when complete",
        status: 0,
      },
      { id: uuidv4(), title: "Arrange display", status: 0 },
    ],
  },
];
