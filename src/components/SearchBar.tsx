import React, { useState } from "react";

interface SearchBarProps {
    placeholder?: string; // Texte par défaut pour l'input
    onAddItem?: (value: string) => void; // Callback appelée lors du clic sur le bouton
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Ajouter une tâche", onAddItem }) => {
    const [inputValue, setInputValue] = useState<string>("");

    // Fonction pour gérer les changements dans l'input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleButtonClick();
    };

    // Fonction appelée lors du clic sur le bouton
    const handleButtonClick = () => {
        const trimText = inputValue.trim();
        if (onAddItem && trimText) {
            onAddItem(trimText); // Appelle la fonction passée en props avec la valeur saisie
            setInputValue(""); // Réinitialise l'input après l'ajout
        }
    };

    return (
        <div className="flex">
            <label className="input input-bordered flex items-center gap-2">
                <input
                    type="text"
                    className="grow"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </label>

            <button className="btn btn-primary" onClick={handleButtonClick}>
                +
            </button>
        </div>
    );
};
