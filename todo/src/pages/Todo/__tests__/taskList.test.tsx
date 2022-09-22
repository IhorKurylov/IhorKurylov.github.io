import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import TasksList from "../components/TaskList/TasksList";
import { defaultTasksList } from "../../../mockData/defaultTasksList";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

// @ts-ignore
test("should render TaskList Component", () => {
  render(
    <TasksList
      editIndex={-1}
      handleAddTask={() => console.log("change")}
      deleteTask={() => console.log("change")}
      editMode={false}
      addMode={false}
      setAddMode={() => console.log("change")}
      list={defaultTasksList}
      onSubtaskChange={() => console.log("change")}
      onTaskChange={() => console.log("change")}
      handleEditItem={() => console.log("change")}
    />
  );
  const list = screen.getByTestId("taskList");
  expect(list).toBeVisible();
  expect(list).toHaveTextContent(defaultTasksList[0].title);
  expect(list).toHaveTextContent(defaultTasksList[1].title);
  expect(list).toHaveTextContent(defaultTasksList[2].title);
  expect(list).toHaveTextContent(defaultTasksList[3].title);
  expect(list).toContainHTML("small");
});

// test("TaskList Component snapshot match", () => {
//   const dom = renderer
//     .create(
//       <TasksList
//         editIndex={-1}
//         handleAddTask={() => console.log("change")}
//         deleteTask={() => console.log("change")}
//         editMode={false}
//         addMode={false}
//         setAddMode={() => console.log("change")}
//         list={defaultTasksList}
//         onSubtaskChange={() => console.log("change")}
//         onTaskChange={() => console.log("change")}
//         handleEditItem={() => console.log("change")}
//       />
//     )
//     .toJSON();
//   expect(dom).toMatchSnapshot();
// });
