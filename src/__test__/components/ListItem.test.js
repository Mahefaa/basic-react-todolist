import renderer from 'react-test-renderer';
import Task from "../../components/Task";
import ListItem from "../../components/ListItem";
import {cleanup} from "@testing-library/react";
import {TASK_DONE_STATUS, TASK_TODO_STATUS} from "../utils/testUtils";

afterEach(cleanup);
describe("ListItem component is rendered correctly", () => {
    it("should render a task with status todo", () => {
        const task = {id: 1, name: "name", status: TASK_TODO_STATUS};
        const tree = renderer
            .create(<ListItem task={task} handleCheck={null} index={null}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
    it("should render a task with status done", () => {
        const task = new Task("name", TASK_DONE_STATUS);

        const tree = renderer
            .create(<ListItem task={task} handleCheck={null} index={null}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
})