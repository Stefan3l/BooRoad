export default function SearchBar({ search, onSearchChange }) {
  return (
    <div className="flex  justify-center space-y-2 mt-4 px-5  ">
      <div className="flex  gap-2">
        <label className="font-medium text-xl text-white" htmlFor="search">
          Cerca Utente:
        </label>
        <input
          className="bg-gray-100 border rounded-xl py-1 px-2.5 w-[400px] shadow-2xl"
          id="search"
          type="search"
          placeholder="Cerca Utente..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)} // Passa il valore della ricerca
        />
      </div>
    </div>
  );
}
