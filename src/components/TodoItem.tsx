import React from "react";

// Définition des types des props
interface TodoItemProps {
    task: {
        id: number;
        text: string;
        isCompleted: boolean;
    };
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle, onDelete }) => {
    const { id, text, isCompleted } = task;

    return (
        <div
            className={`w-full m-5 rounded-box p-3 flex ${
                isCompleted ? "bg-indigo-900" : "bg-indigo-700"
            }`}
        >
            {/* Checkbox */}
            <span className="pr-8">
        <input
            type="checkbox"
            className="checkbox"
            checked={isCompleted}
            onChange={() => onToggle(id)}
        />
      </span>

            {/* Texte de la tâche */}
            <span
                className={`flex-grow ${isCompleted ? "line-through" : ""}`}
            >
        {text}
      </span>

            {/* Bouton Supprimer */}
            <div>
                <button
                    className="btn btn-error btn-outline btn-xs"
                    onClick={() => onDelete(id)}
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
