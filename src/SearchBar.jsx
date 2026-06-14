import { FaHeart, FaRegHeart } from "react-icons/fa";
function SearchBar({
  search,
  setSearch,
  showFavorites,
  setShowFavorites,
}) {
  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <button
        className="favorites-btn"
        onClick={() =>
          setShowFavorites(!showFavorites)
        }
      >
        {showFavorites
          ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}

export default SearchBar;