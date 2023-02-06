import style from './index.module.css'
import ListItem from "../ListItem";


export default function List({list, setList, status}) {
    const handleCheck = (e) => {
        if (e.target.checked) {
            let updatedList = list.map((task, id) => {
                if (id === parseInt(e.target.value)) {
                    return {
                        ...task,
                        status: "DONE"
                    };
                }
                return task;
            });
            setList(updatedList);
        }
    }
    return (
        <div className={style.list}>
            <h1 className={style.title}>{status}</h1>
            <div className={style.list__items} data-testid = {`list-${status}`}>
                {
                    list.map((task, index) => (
                        task.status === status &&
                        <ListItem task={task} index={index} handleCheck={handleCheck}/>
                    ))
                }
            </div>
        </div>
    )
}