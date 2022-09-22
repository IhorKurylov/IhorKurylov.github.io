import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import EditTask from "../components/EditTask/EditTask";
import { defaultTasksList } from "../../../mockData/defaultTasksList";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});
// @ts-ignore
test("should render EditTask Component with subtasks", () => {
  render(
    <EditTask
      editMode={true}
      addMode={false}
      editItem={defaultTasksList[1]}
      setEditMode={() => console.log("change")}
      setAddMode={() => console.log("change")}
      handleSave={() => console.log("change")}
      handleCreateTask={() => console.log("change")}
    />
  );
  const task = screen.getByTestId("EditTask");
  expect(task).toBeInTheDocument();
  expect(task).not.toContainHTML("small");
});

//todo need to update snapshot for running tests due to uuid
test("EditTask snapshot match", () => {
  const dom = renderer
    .create(
      <EditTask
        editMode={true}
        addMode={false}
        editItem={defaultTasksList[1]}
        setEditMode={() => console.log("change")}
        setAddMode={() => console.log("change")}
        handleSave={() => console.log("change")}
        handleCreateTask={() => console.log("change")}
      />
    )
    .toJSON();
  expect(dom).toMatchSnapshot();
});
