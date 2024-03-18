import { useState } from "react";
import "./App.css";
import gamesData from "./games";

function Edit({ game, onSave }) {
  const [name, setName] = useState(game.name);
  const [inStock, setInStock] = useState(game.inStock);

  const handleSave = () => {
    onSave(game.id, name, inStock);
  };

  return (
    <div className="game-edit-card">
      <div>
        <label>Update Name: </label>
        <input
          placeholder={name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Is this game in stock?</label>
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

function App() {
  const [games, setGames] = useState(gamesData);

  const [editingGameId, setEditingGameId] = useState(null);

  const handleEdit = (id) => {
    setEditingGameId(id);
  };

  const handleSave = (id, name, inStock) => {
    setGames(
      games.map((game) => (game.id === id ? { ...game, name, inStock } : game))
    );
    setEditingGameId(null);
  };

  return (
    <div className="app">
      <h1>Games Store Admin</h1>
      <div className="games-wrapper">
        {games.map((game) => (
          <div className="games-card" key={game.id}>
            {game.name} - {game.inStock ? "In Stock" : "Out of Stock"}
            {editingGameId === game.id ? (
              <Edit game={game} onSave={handleSave} />
            ) : (
              <button
                onClick={() => handleEdit(game.id)}
                className="games-edit-button"
              >
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
