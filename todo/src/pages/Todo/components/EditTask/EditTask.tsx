import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { Task } from "../../../../interfaces/todoList.interface";
import styles from "./EditTask.module.scss";
interface Props {
  editMode: boolean;
  addMode: boolean;
  editItem: Task | undefined;
}
const EditTask = ({ editMode, addMode, editItem }: Props) => {
  const [inputValues, setInputValue] = useState<Task>();
  useEffect(() => {
    console.log("effect");
    setInputValue(editItem);
  }, [editItem]);

  console.log(inputValues);

  return (
    <div className={styles.container}>
      {editMode && inputValues && (
        <div>
          <h1 className={styles.headerTitle}>Edit your Task</h1>
          <div className={styles.taskContainer}>
            <Input placeholder="Basic usage" value={inputValues?.title} />
          </div>
        </div>
      )}
      {addMode && (
        <div>
          <h1 className={styles.headerTitle}>Create new Task</h1>
        </div>
      )}
    </div>
  );
};
export default EditTask;
