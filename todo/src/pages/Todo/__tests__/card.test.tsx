import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import Card from "../components/Card/Card";
import { defaultTasksList } from "../../../mockData/defaultTasksList";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});
// @ts-ignore
test("should render Card Component with subtasks", () => {
  render(
    <Card
      editMode={true}
      addMode={false}
      editIndex={1}
      task={defaultTasksList[0]}
      taskIndex={0}
      key={"string"}
      onTaskChange={() => console.log("change")}
      onSubtaskChange={() => console.log("change")}
      deleteTask={() => console.log("change")}
      handleEditItem={() => console.log("change")}
    />
  );
  const card = screen.getByTestId(defaultTasksList[0].id);
  expect(card).toBeInTheDocument();
  expect(card).toHaveTextContent(defaultTasksList[0].title);
  expect(card).toHaveTextContent(defaultTasksList[0].description);
  // @ts-ignore
  expect(card).toHaveTextContent(defaultTasksList[0]?.subtasks[0]?.title);
  // @ts-ignore
  expect(card).toHaveTextContent(defaultTasksList[0]?.subtasks[1]?.title);
  expect(card).toContainHTML("small");
});

test("should render Card Component without subtasks", () => {
  render(
    <Card
      editMode={true}
      addMode={false}
      editIndex={1}
      task={defaultTasksList[4]}
      taskIndex={0}
      key={"string"}
      onTaskChange={() => console.log("change")}
      onSubtaskChange={() => console.log("change")}
      deleteTask={() => console.log("change")}
      handleEditItem={() => console.log("change")}
    />
  );
  const card = screen.getByTestId(defaultTasksList[4].id);
  expect(card).toBeInTheDocument();
  expect(card).toHaveTextContent(defaultTasksList[4].title);
  expect(card).toHaveTextContent(defaultTasksList[4].description);
  expect(card).not.toContainHTML("small");
});
//todo need to update snapshot for running tests due to uuid
test("Card snapshot match", () => {
  const dom = renderer
    .create(
      <Card
        editMode={true}
        addMode={false}
        editIndex={1}
        task={defaultTasksList[0]}
        taskIndex={0}
        key={defaultTasksList[0].id}
        onTaskChange={() => console.log("change")}
        onSubtaskChange={() => console.log("change")}
        deleteTask={() => console.log("change")}
        handleEditItem={() => console.log("change")}
      />
    )
    .toJSON();
  expect(dom).toMatchSnapshot();
});
