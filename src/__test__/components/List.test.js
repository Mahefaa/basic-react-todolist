import {cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";
import List from "../../components/List";
import {TASK_DONE_STATUS, TASK_TODO_STATUS} from "../utils/testUtils";

afterEach(cleanup);
test("List component is rendered correctly", () => {
    const list = [
        {id: 1, name: "wash dishes", status: TASK_TODO_STATUS},
        {id: 2, name: "eat dinner", status: TASK_TODO_STATUS},
        {id: 3, name: "prepare dinner", status: TASK_DONE_STATUS},
        {id: 4, name: "eat breakfast", status: TASK_DONE_STATUS}
    ];
    const tree = renderer
        .create(<List list={list} setList={null} status={TASK_TODO_STATUS}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
})