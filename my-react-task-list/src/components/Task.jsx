import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Task = (tarea) => {
    const {name} = tarea;
    return (
        <li>
        {name}
        <input type="Checkbox" />
        <FontAwesomeIcon icon={faTrash}/>
      </li>  
    )
    
}