import React from "react";
import { Status, Task } from "../../../../interfaces/todoList.interface";
import styles from "./Card.module.scss";

interface Props {
  task: Task;
  onSubtaskChange: (e: any, a: number, i: number) => void;
  onTaskChange: (e: any, i: number) => void;
  deleteTask: (i: number) => void;
  handleEditItem: (i: number) => void;
  taskIndex: number;
}
const Card = ({
  task,
  onSubtaskChange,
  taskIndex,
  onTaskChange,
  deleteTask,
  handleEditItem,
}: Props) => {
  return (
    <div
      className={
        task.status === Status.inList ? styles.container : styles.containerDone
      }
    >
      <div className={styles.controls}>
        <button onClick={() => handleEditItem(taskIndex)}>Edit</button>
        <button onClick={() => deleteTask(taskIndex)}>Delete</button>
      </div>
      <div className={styles.header}>
        <input
          type="checkbox"
          checked={Boolean(task.status)}
          onChange={(e) => onTaskChange(e, taskIndex)}
        />
        <span className={styles.title}>{task.title}</span>
      </div>
      <div className={styles.description}>
        <span>{task.description}</span>
      </div>
      {task.subtasks && task.subtasks?.length > 0 && (
        <div className={styles.subtasksContainer}>
          {task.subtasks.map((subtask, index) => (
            <div
              className={
                subtask.status === Status.inList
                  ? styles.subtask
                  : styles.subtaskDone
              }
              key={subtask.id}
            >
              <input
                type="checkbox"
                checked={Boolean(subtask.status)}
                onChange={(e) => onSubtaskChange(e, taskIndex, index)}
              />
              <span key={subtask.id} className={styles.title}>
                {subtask.title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
