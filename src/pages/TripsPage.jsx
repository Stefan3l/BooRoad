import { useState } from "react";

// DATA
import utenti from "../data/Utenti";
import destinazioniVacanza from "../data/Destinazioni";

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
    <div className="h-screen w-[90%]">
      <h3>Dati Viaggio</h3>
      <div>
        {/* <h4>{selectedTrip.nome}</h4>
        <p>{selectedTrip.descrizione}</p> */}
      </div>

      <SearchBar search={search} onSearchChange={handlerSearch} />

      <h3>Rubrica utenti</h3>
      <div className="container mx-auto max-w-[1200px] text-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {utentiFiltrati.length > 0 ? (
            utentiFiltrati.map((utente) => (
              <div key={utente.id}>
                <UsersCard utente={utente} />
              </div>
            ))
          ) : (
            <h3>Nessun utente trovato</h3>
          )}
        </div>
      </div>
    </div>
  );
}
