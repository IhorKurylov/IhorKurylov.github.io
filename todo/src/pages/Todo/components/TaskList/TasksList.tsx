import React from "react";
import styles from "./TasksList.module.scss";
import { Status, Task } from "../../../../interfaces/todoList.interface";
import Card from "../Card/Card";

interface Props {
  list: Task[];
  onSubtaskChange: (e: any, a: number, i: number) => void;
  onTaskChange: (e: any, i: number) => void;
  deleteTask: (i: number) => void;
  handleEditItem: (i: number) => void;
  editMode: boolean;
  editIndex: number;
  addMode: boolean;
  setAddMode: (b: boolean) => void;
  handleAddTask: () => void;
}
const TasksList = ({
  list,
  onSubtaskChange,
  onTaskChange,
  editMode,
  addMode,
  setAddMode,
  deleteTask,
  handleEditItem,
  handleAddTask,
  editIndex,
}: Props) => {
  const incompletedTasks = () => {
    let count = 0;
    list.forEach((task) => task.status === Status.inList && count++);
    return count;
  };
  return (
    <div className={styles.container} data-testid="taskList">
      <h1 className={styles.headerTitle}>To Do List</h1>
      <div className={styles.listContainer}>
        {!addMode && !editMode ? (
          <p className={styles.controls} onClick={handleAddTask}>
            Add new Task
          </p>
        ) : (
          addMode &&
          !editMode && (
            <p
              className={styles.controlsAbort}
              onClick={() => setAddMode(false)}
            >
              Abort adding New Task
            </p>
          )
        )}
        <div className={addMode || editMode ? styles.containerDisabled : ""}>
          {list &&
            list?.map((task, index) => (
              <Card
                editMode={editMode}
                addMode={addMode}
                editIndex={editIndex}
                task={task}
                taskIndex={index}
                key={task.id}
                onTaskChange={onTaskChange}
                onSubtaskChange={onSubtaskChange}
                deleteTask={deleteTask}
                handleEditItem={handleEditItem}
              />
            ))}
        </div>
        <p className={styles.counter}>
          Need to complete {incompletedTasks()} tasks
        </p>
      </div>
    </div>
  );
};
export default TasksList;
