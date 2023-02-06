import renderer from "react-test-renderer";
import TodoList from "../../components/TodoList";
import {cleanup, fireEvent, render, screen} from "@testing-library/react";

afterEach(cleanup);

test("TodoList component is rendered correctly", () => {
    const tree = renderer
        .create(<TodoList/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})

const LIST_TODO_TEST_ID = "list-TODO";
const LIST_DONE_TEST_ID = "list-DONE";
const FIRST_TODO_TEST_ID = "TODO-0";
const NEW_TODO_VALUE = "new todo";
const VALID_INPUT_KEYDOWN = "Enter";
const TASK_INPUT_TEST_ID = "task-input";
const INVALID_INPUT_KEYDOWN = "Space";
describe("Modify TodoList elements", () => {
    it("should add a new task with status Todo", () => {
        render(<TodoList/>)
        const input = screen.getByTestId(TASK_INPUT_TEST_ID);

        fireEvent.change(input, {target: {value: NEW_TODO_VALUE}});
        fireEvent.keyDown(input, {key: VALID_INPUT_KEYDOWN});
        const listOfTodos = screen.getByTestId(LIST_TODO_TEST_ID);

        expect(input).toHaveValue("");
        expect(listOfTodos.children.length).toEqual(1);
        expect(listOfTodos).toHaveTextContent(NEW_TODO_VALUE);
    })
    it("Input value should not be submitted if pressed VALID_INPUT_KEYDOWN isn't \"Enter\"", () => {
        render(<TodoList/>)
        const INPUT_TEST_VALUE = "Test value"
        const input = screen.getByTestId(TASK_INPUT_TEST_ID);

        fireEvent.change(input, {target: {value: INPUT_TEST_VALUE}});
        fireEvent.keyDown(input, {key: INVALID_INPUT_KEYDOWN});
        const list = screen.getByTestId(LIST_TODO_TEST_ID);

        expect(input).toHaveValue(INPUT_TEST_VALUE);
        expect(list.children.length).toEqual(0);
    })
    it("should move a task from todo to done", () => {
        render(<TodoList/>)
        const input = screen.getByTestId(TASK_INPUT_TEST_ID);

        fireEvent.change(input, {target: {value: NEW_TODO_VALUE}});
        fireEvent.keyDown(input, {key: VALID_INPUT_KEYDOWN});
        const checkBox = screen.getByTestId(FIRST_TODO_TEST_ID);
        fireEvent.click(checkBox);
        const listOfTodos = screen.getByTestId(LIST_TODO_TEST_ID);
        const listOfDone = screen.getByTestId(LIST_DONE_TEST_ID);

        expect(listOfTodos.children.length).toEqual(0);
        expect(listOfTodos).not.toHaveTextContent(NEW_TODO_VALUE)
        expect(listOfDone.children.length).toEqual(1);
        expect(listOfDone).toHaveTextContent(NEW_TODO_VALUE);
    })
})