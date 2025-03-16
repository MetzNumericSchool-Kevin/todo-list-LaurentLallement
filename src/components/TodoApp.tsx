import { SearchBar } from "./SearchBar";
import TodoItem from "./TodoItem.tsx";
import { useState } from "react";

// Définition du type pour une tâche individuelle
interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}

export function TodoApp() {
    // Le corps du composant doit être entouré par des accolades
    const [taskList, setTaskList] = useState<Task[]>([
        { id: 1, text: "Acheter des oranges", isCompleted: false },
        { id: 2, text: "Courir avec le fraté", isCompleted: true },
        { id: 3, text: "Me faire défoncer à LoL", isCompleted: true },
    ]);
    const [currentId, setCurrentId] = useState(3);

    const handleAddItem = (value : string) => {
        if (value) {
                setTaskList(taskList => [
                    ...taskList,
                    { id: currentId + 1, text: value, isCompleted: false }
                ]);
                setCurrentId(id => id + 1);
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
                {taskList.map((task) => (
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
