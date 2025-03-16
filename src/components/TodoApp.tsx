import { SearchBar } from "./SearchBar";

export function TodoApp() {
    // Suppression de la déclaration imbriquée de App
    const handleAddItem = (value: string) => {
        console.log("Nouvelle tâche ajoutée :", value);
    };

    return (
        <>
            <SearchBar placeholder="Ajouter une tâche" onAddItem={handleAddItem} />
            <div className="my-5 flex-column gap-5 w-full text-left">
                {/* TODO ITEM version normal */}
                <div className="bg-indigo-700 w-full m-5 rounded-box p-3 flex">
                    <span className="pr-8">
                        <input type="checkbox" className="checkbox" />
                    </span>
                    <span className="flex-grow">Acheter des oranges</span>
                    <div>
                        <button className="btn btn-error btn-outline btn-xs">X</button>
                    </div>
                </div>

                {/* TODO Item version cochée */}
                <div className="bg-indigo-900 w-full m-5 rounded-box p-3 flex">
                    <span className="pr-8">
                        <input type="checkbox" checked={true} className="checkbox" />
                    </span>
                    <span className="flex-grow line-through">Courir avec le fraté</span>
                    <div>
                        <button className="btn btn-error btn-outline btn-xs">X</button>
                    </div>
                </div>

                {/* TODO Item version cochée */}
                <div className="bg-indigo-900 w-full m-5 rounded-box p-3 flex">
                    <span className="pr-8">
                        <input type="checkbox" checked={true} className="checkbox" />
                    </span>
                    <span className="flex-grow line-through">Me faire défoncer à LoL</span>
                    <div>
                        <button className="btn btn-error btn-outline btn-xs">X</button>
                    </div>
                </div>
            </div>
        </>
    );
}
