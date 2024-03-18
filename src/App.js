import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import gamesData from "./games";
function Edit({ game, onSave }) {
    const [name, setName] = useState(game.name);
    const [inStock, setInStock] = useState(game.inStock);
    const handleSave = () => {
        onSave(game.id, name, inStock);
    };
    return (_jsxs("div", { className: "game-edit-card", children: [_jsxs("div", { children: [_jsx("label", { children: "Update Name: " }), _jsx("input", { placeholder: name, value: name, onChange: (e) => setName(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { children: "Is this game in stock?" }), _jsx("input", { type: "checkbox", checked: inStock, onChange: (e) => setInStock(e.target.checked) })] }), _jsx("button", { onClick: handleSave, children: "Save" })] }));
}
function App() {
    const [games, setGames] = useState(gamesData);
    const [editingGameId, setEditingGameId] = useState(null);
    const handleEdit = (id) => {
        setEditingGameId(id);
    };
    const handleSave = (id, name, inStock) => {
        setGames(games.map((game) => (game.id === id ? { ...game, name, inStock } : game)));
        setEditingGameId(null);
    };
    return (_jsxs("div", { className: "app", children: [_jsx("h1", { children: "Games Store Admin" }), _jsx("div", { className: "games-wrapper", children: games.map((game) => (_jsxs("div", { className: "games-card", children: [game.name, " - ", game.inStock ? "In Stock" : "Out of Stock", editingGameId === game.id ? (_jsx(Edit, { game: game, onSave: handleSave })) : (_jsx("button", { onClick: () => handleEdit(game.id), className: "games-edit-button", children: "Edit" }))] }, game.id))) })] }));
}
export default App;
