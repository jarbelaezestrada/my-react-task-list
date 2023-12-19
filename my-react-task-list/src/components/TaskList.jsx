import React, { useState, useEffect } from 'react';
import { Task } from "./Task";
export const TaskList = () => {
     const [tasks, setTasks] = useState([]);
     useEffect(() => {
    // Cargar las tareas desde localStorage al inicio de la aplicación
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

    const tareas  = [
        {id: 1, name:"Lavar los platos", completed: true},
        {id: 2, name:"Pasear al perro", completed: true},
        {id: 3, name:"Sacar la basura", completed: false},
        {id: 4, name:"Alimentar al gato", completed: true},
        {id: 5, name:"Lavarse los dientes", completed: false},
        
    ]

  const addTask = (title, description) => {
    // Agregar nueva tarea al listado
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks(prevTasks => [...prevTasks, newTask]);

    // Actualizar localStorage
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = taskId => {
    // Eliminar tarea del listado
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);

    // Actualizar localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (taskId, newTitle, newDescription) => {
    // Modificar título y descripción de la tarea
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task
    );

    setTasks(updatedTasks);

    // Actualizar localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
        <div>

         <Task name="lavar los platos"/>
         <Task name="Pasear al perro"/>
         <Task name="Sacar la basura"/>
         <Task name="Alimentar al gato"/>
         <Task name="lavarse los dientes"/>
    </div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            <button onClick={() => editTask(task.id, prompt('Nuevo título'), prompt('Nueva descripción'))}>
              Editar
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask(prompt('Título'), prompt('Descripción'))}>Agregar Tarea</button>
    </div>
  );
}

 