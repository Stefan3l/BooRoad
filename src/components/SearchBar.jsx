export default function SearchBar({ search, onSearchChange }) {
  return (
    <div>
      <label htmlFor="search">Cerca Utente</label>
      <input
        id="search"
        type="search"
        placeholder="Cerca Utente"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)} // Passa il valore della ricerca
      />
    </div>
  );
}
