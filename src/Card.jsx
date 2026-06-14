import "./Card.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function PokemonCard({ image, name, hp, attack, type }) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-header">
        <h2>{name}</h2>
        <span>HP {hp}</span>
      </div>

      <img src={image} alt={name} className="pokemon-image" />

      <div className="pokemon-details">
        <div className="stats">
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Attack:</strong> {attack}
          </p>
        </div>
        <button className="heart">
          <FaHeart />
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
