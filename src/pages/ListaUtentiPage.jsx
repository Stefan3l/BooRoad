import { useState } from "react";

// DATA
import utenti from "../data/Utenti";

// COMPONENTS
import SearchBar from "../components/SearchBar";
import UsersCard from "../components/UsersCard";

export default function TripPage() {
  // const [selectedTrip, setSelectedTrip] = useState(destinazioniVacanza[0]);
  const [search, setSearch] = useState("");

  const handlerSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const utentiFiltrati = utenti.filter((utente) =>
    utente.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" w-[90%] my-8 space-y-8">
      <h3 className="text-center my-8 text-5xl title-section">
        Rubrica utenti
      </h3>
      <SearchBar search={search} onSearchChange={handlerSearch} />
      <div className="container mx-auto max-w-[1200px] text-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 px-3.5">
          {utentiFiltrati.length > 0 ? (
            utentiFiltrati.map((utente) => (
              <div key={utente.id}>
                <UsersCard utente={utente} />
              </div>
            ))
          ) : (
            <div className="h-screen">
              <h3 className="text-2xl font-medium text-red-600">
                Nessun utente trovato!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
