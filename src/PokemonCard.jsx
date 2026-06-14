import { FaHeart, FaRegHeart } from "react-icons/fa";

function PokemonCard({
  id,
  image,
  name,
  hp,
  attack,
  type,
  isFavorite,
  onFavoriteToggle,
}) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-header">
        <h2>{name}</h2>
        <span>HP {hp}</span>
      </div>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
        className="pokemon-image"
      />

      <div className="pokemon-details">
        <div className="stats">
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Attack:</strong> {attack}
          </p>
        </div>

        <div className="heart" onClick={onFavoriteToggle}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
