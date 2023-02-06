import style from './index.module.css'

export default function ListItem({task, index, handleCheck}) {
    return (
        <div key={task.id}>
            {task.status === "TODO" &&
                <input type={"checkbox"} value={index} onClick={handleCheck} data-testid={`TODO-${index}`}/>}
            <span className={`${style.task__name} ${task.status === "DONE" ? style.done : style.todo}`}>
                {task.name}
            </span>
        </div>
    );
}