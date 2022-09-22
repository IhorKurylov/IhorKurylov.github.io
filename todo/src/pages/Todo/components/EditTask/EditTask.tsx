import React, { useEffect, useState } from "react";
import { Task } from "../../../../interfaces/todoList.interface";
import styles from "./EditTask.module.scss";
import { Input } from "antd";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";
interface Props {
  editMode: boolean;
  addMode: boolean;
  editItem: Task | undefined;
  setEditMode: (b: boolean) => void;
  setAddMode: (b: boolean) => void;
  handleSave: (b: Task) => void;
  handleCreateTask: (b: Task) => void;
}
const EditTask = ({
  editMode,
  editItem,
  setEditMode,
  handleSave,
  setAddMode,
  addMode,
  handleCreateTask,
}: Props) => {
  const [inputValues, setInputValue] = useState<Task>();
  useEffect(() => {
    setInputValue(editItem);
  }, [editItem]);

  const addSubtask = () => {
    const subtasks = inputValues?.subtasks;
    // @ts-ignore
    subtasks.push({
      id: uuidv4(),
      title: "",
      status: 0,
    });
    // @ts-ignore
    setInputValue({
      ...inputValues,
      // @ts-ignore
      subtasks,
    });
  };

  const removeSubtask = () => {
    const subtasks = inputValues?.subtasks;
    // @ts-ignore
    subtasks.pop();
    // @ts-ignore
    setInputValue({
      ...inputValues,
      // @ts-ignore
      subtasks,
    });
  };
  const editSubtask = (index: number, e: any) => {
    // @ts-ignore
    setInputValue({
      ...inputValues,
      // @ts-ignore
      subtasks: inputValues?.subtasks.map((task, i) => {
        if (index !== i) {
          return task;
        } else {
          task.title = e.target.value;
          return task;
        }
      }),
    });
  };

  // @ts-ignore
  return (
    <div className={styles.container} data-testid="EditTask">
      {inputValues && (editMode || addMode) && (
        <>
          <h1 className={styles.headerTitle}>
            {editMode ? "Edit" : "Add"} your Task
          </h1>
          <div className={styles.taskContainer}>
            <p className={styles.taskTitle}>Title</p>
            <Input
              allowClear
              placeholder="Task title"
              value={inputValues?.title}
              onChange={(e: any) =>
                setInputValue({
                  ...inputValues,
                  title: e.target.value,
                })
              }
            />
            <p className={styles.taskTitle}>Description</p>
            <Input
              allowClear
              placeholder="Task description"
              value={inputValues?.description}
              onChange={(e: any) =>
                setInputValue({
                  ...inputValues,
                  description: e.target.value,
                })
              }
            />
            {inputValues?.subtasks && inputValues?.subtasks?.length > 0 && (
              <>
                <p className={styles.taskTitle}>Subtasks</p>
                {inputValues?.subtasks.map((subtask, index) => (
                  <div key={subtask.id}>
                    <p className={styles.taskTitle}>Title</p>
                    <Input
                      allowClear
                      placeholder="Subtask title"
                      value={subtask?.title}
                      onChange={(e: any) => editSubtask(index, e)}
                    />
                  </div>
                ))}
              </>
            )}
            <button className={styles.addBtn} onClick={addSubtask}>
              Add Subtask
            </button>
            <button className={styles.removeBtn} onClick={removeSubtask}>
              Remove Subtask
            </button>
            <div className={styles.btnContainer}>
              <button
                className={styles.cancelBtn}
                onClick={() =>
                  editMode ? setEditMode(false) : setAddMode(false)
                }
              >
                Cancel
              </button>
              <button
                className={styles.saveBtn}
                onClick={() =>
                  editMode
                    ? handleSave(inputValues)
                    : handleCreateTask(inputValues)
                }
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default EditTask;
