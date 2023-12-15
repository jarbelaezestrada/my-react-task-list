import { Task } from "./Task";
export const TaskList = () => {

    const tareas  = [
        {id: 1, name:"Lavar los platos", completed: true},
        {id: 2, name:"Pasear al perro", completed: true},
        {id: 3, name:"Sacar la basura", completed: false},
        {id: 4, name:"Alimentar al gato", completed: true},
        {id: 5, name:"Lavarse los dientes", completed: false},
        
    ]
    return <div>

         <Task name="lavar los platos"/>
         <Task name="Pasear al perro"/>
         <Task name="Sacar la basura"/>
         <Task name="Alimentar al gato"/>
         <Task name="lavarse los dientes"/>
    </div>
}