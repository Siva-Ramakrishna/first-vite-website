import PokemonCard from "./PokemonCard";

function PokemonGrid({
  pokemon,
  favorites,
  toggleFavorite,
}) {
  return (
    <div className="card-grid">
      {pokemon.map((poke) => (
        <PokemonCard
        id={poke.id}
          key={poke.id}
          {...poke}
          isFavorite={favorites.includes(
            poke.id
          )}
          onFavoriteToggle={() =>
            toggleFavorite(poke.id)
          }
        />
      ))}
    </div>
  );
}

export default PokemonGrid;