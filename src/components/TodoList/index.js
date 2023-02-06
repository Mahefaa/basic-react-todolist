import {useState} from "react";
import Task from "../Task";
import List from "../List";
import style from "./index.module.css"

export default function TodoList() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim().length !== 0) {
            setList(prevState => [...prevState, new Task(input)])
            setInput("");
        }
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <div className={style.kanban__board}>
            <span className={style.input}>
                <input
                    type={"text"}
                    onKeyDown={handleKeyDown}
                    value={input}
                    onChange={handleChange}
                    placeholder={"What needs to be done ?"}
                    data-testid={"task-input"}
                />
            </span>
            <div className={style.list__container}>
                <List list={list} status={"TODO"} setList={setList}/>
                <List list={list} status={"DONE"} setList={setList}/>
            </div>
        </div>
    );
}