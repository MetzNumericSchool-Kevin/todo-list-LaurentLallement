import { SearchBar } from "./SearchBar";
import TodoItem from "./TodoItem.tsx";

export function TodoApp() {
    const handleAddItem = (value: string) => {
        console.log("Nouvelle tâche ajoutée :", value);
    };

    // Gestion de cocher/décocher
    const handleToggle = (id: number): void => {
        console.log("Tâche cochée/décochée avec l'ID :", id);
    };

    // Gestion de la suppression
    const handleDelete = (id: number): void => {
        console.log("Tâche supprimée avec l'ID :", id);
    };

    return (
        <>
            <SearchBar placeholder="Ajouter une tâche" onAddItem={handleAddItem} />
            <div className="my-5 flex-column gap-5 w-full text-left">
                <TodoItem
                    key={1}
                    task={{id:1, text:"Acheter des oranges", isCompleted:false}}
                    onToggle={() => handleToggle(1)}
                    onDelete={() => handleDelete(1)}                />
                <TodoItem
                    key={2}
                    task={{id:2, text:"Courir avec le fraté", isCompleted:true}}

                    onToggle={() => handleToggle(2)}
                    onDelete={() => handleDelete(2)}                />

                <TodoItem
                    key={3}
                    task={{id:3, text:"Me faire défoncer à LoL", isCompleted:true}}

                    onToggle={() => handleToggle(3)}
                    onDelete={() => handleDelete(3)}                />
            </div>
        </>
    );
}
