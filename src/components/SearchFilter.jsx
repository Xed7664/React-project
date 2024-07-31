import "./SearchFilter.css";

export default function SearchFilter({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search citizens here..."
        value={searchQuery}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}
