import { SearchBar } from "./SearchBar";
import TodoItem from "./TodoItem.tsx";
import {useEffect, useState} from "react";

// Définition du type pour une tâche individuelle
interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}

export function TodoApp() {
    // Le corps du composant doit être entouré par des accolades
    const [taskList, setTaskList] = useState<Task[]>(() => {
       const saveData = localStorage.getItem("taskList");
       return saveData ? JSON.parse(saveData) : [];
    });

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList]);

    const handleAddItem = (value : string) => {
        if (value) {
                setTaskList(taskList => [
                    ...taskList,
                    { id: taskList.length + 1, text: value, isCompleted: false }
                ]);
            }
        };

    // Gestion de cocher/décocher
    const handleToggle = (id: number): void => {
        setTaskList((taskList) =>
            taskList.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task // terriblement efficace mais ça pique un peu les yeux à un vieux développeur
            )
        );
    };

    // Gestion de la suppression
    const handleDelete = (id: number): void => {
        setTaskList(taskList => taskList.filter(task => task.id !== id)); // filter vraiment cool !
    };

    return (
        <>
            <SearchBar placeholder="Ajouter une tâche" onAddItem={handleAddItem} />
            <div className="my-5 flex-column gap-5 w-full text-left">
                {taskList.sort((a, b) => {
                    if (a.isCompleted == b.isCompleted) {
                        return 0; // Si les deux tâches ont le même état, leur ordre reste inchangé
                    }
                    return a.isCompleted ? 1 : -1; // Les tâches non cochées (false) doivent apparaître avant les cochées (true)
                })
                    .map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        onToggle={() => handleToggle(task.id)}
                        onDelete={() => handleDelete(task.id)}
                    />
                ))}
            </div>
        </>
    );
}
