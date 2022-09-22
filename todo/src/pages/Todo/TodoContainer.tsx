import React, { useEffect, useState } from "react";
import styles from "./TodoContainer.module.scss";
import { encryptStorage } from "../../utils/storage";
import TasksList from "./components/TaskList/TasksList";
import { defaultTasksList } from "../../mockData/defaultTasksList";
import { Status, Task } from "../../interfaces/todoList.interface";
import EditTask from "./components/EditTask/EditTask";

const TodoContainer = () => {
  const tasksList = encryptStorage.getItem("tasks");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [addMode, setAddMode] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<Task>();
  const [editIndex, setEditIndex] = useState<number>(-1);
  useEffect(() => {
    console.log("here");
    if (!tasksList) {
      encryptStorage.setItem("tasks", defaultTasksList);
      setTasks(defaultTasksList);
    } else {
      setTasks(tasksList);
    }
  }, []);
  const onSubtaskChange = (e: any, taskIndex: number, subtaskIndex: number) => {
    // @ts-ignore
    const updatedTask = tasks[taskIndex];
    const updatedTasks = tasks.map((item, index) => {
      if (index !== taskIndex) {
        return item;
      } else {
        // @ts-ignore
        item.subtasks[subtaskIndex].status = +e.target.checked;
        // @ts-ignore
        const isDone = item.subtasks.every(
          (subtask) => subtask.status === Status.done
        );
        if (isDone) {
          item.status = Status.done;
        } else {
          item.status = Status.inList;
        }
        return item;
      }
    });
    setTasks(updatedTasks);
    encryptStorage.setItem("tasks", updatedTasks);
  };

  const onTaskChange = (e: any, taskIndex: number) => {
    const updatedTasks = tasks.map((item, index) => {
      if (index !== taskIndex) {
        return item;
      } else {
        const checked = +e.target.checked;
        item.status = checked;
        // @ts-ignore
        if (checked && item?.subtasks?.length > 0) {
          // @ts-ignore
          item.subtasks = item.subtasks.map((subtask) => {
            subtask.status = Status.done;
            return subtask;
          });
        }
        // @ts-ignore
        if (!checked && item?.subtasks?.length > 0) {
          // @ts-ignore
          item.subtasks = item.subtasks.map((subtask) => {
            subtask.status = Status.inList;
            return subtask;
          });
        }
        return item;
      }
    });
    setTasks(updatedTasks);
    encryptStorage.setItem("tasks", updatedTasks);
  };

  const deleteTask = (taskIndex: number) => {
    const updatedTasks = tasks.filter((item, index) => index !== taskIndex);
    setTasks(updatedTasks);
    encryptStorage.setItem("tasks", updatedTasks);
  };

  const handleEditItem = (taskIndex: number) => {
    console.log("edit");
    setEditItem(tasks[taskIndex]);
    setEditMode(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>To Do List Tracker</h1>
      <main className={styles.main}>
        <TasksList
          deleteTask={deleteTask}
          editMode={editMode}
          addMode={addMode}
          setAddMode={setAddMode}
          list={tasks}
          onSubtaskChange={onSubtaskChange}
          onTaskChange={onTaskChange}
          handleEditItem={handleEditItem}
        />
        <EditTask editMode={editMode} addMode={addMode} editItem={editItem} />
      </main>
    </div>
  );
};
export default TodoContainer;
