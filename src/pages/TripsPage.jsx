import { useParams } from "react-router";

import Destinazioni from "../data/Destinazioni";
import Utenti from "../data/Utenti";
import UsersCard from "../components/UsersCard";
import Stars from "../components/Stars";

export default function TripsPage() {
  const { id } = useParams();

  const trip = Destinazioni.find((numb) => numb.id === Number(id));
  const starsID = Math.ceil(trip.vote);
  const emptyStarsID = 5 - starsID;
  const utentiFiltrati = Utenti; // copy l'array
  const utentiRandom = [...utentiFiltrati]
    .sort(() => Math.random() - 0.5) // Mischia l'array
    .slice(0, 5); // Seleziona i primi 5

  return (
    <div className=" container mx-auto max-w-[1200px] text-center my-10 space-y-8 px-2.5">
      <h1 className="title-section text-4xl">Viaggio a {trip.nome}</h1>
      <div className="bg-white flex flex-col md:flex-row shadow-black    transform transition duration-[300ms] hover:scale-102  shadow-xl rounded-2xl p-2.5">
        <div className="w-full md:w-4/10">
          <img
            className="h-full w-full rounded-2xl  "
            src={trip.image}
            alt={trip.nome}
          />
        </div>
        <div className="w-full md:w-6/10 px-2.5 py-2.5">
          <h1 className="text-3xl font-medium">{trip.nome}</h1>
          <div className="text-amber-400 mt-2">
            <Stars stars={starsID} emptyStars={emptyStarsID} />
          </div>
          <p className="mt-4 text-lg font-medium">{trip.descrizione}</p>
          <div className="space-y-2 border my-3.5 font-medium text-center py-1.5 rounded-xl shadow">
            <div>
              <p>Data Inizio:</p>
              <p>{trip.dataInizio}</p>
            </div>
            <i className="fa-solid fa-arrow-down shadow"></i>
            <div>
              <p>Data Fine:</p>
              <p>{trip.dataFine}</p>
            </div>
          </div>
          <div className="text-center my-4 text-2xl ">
            <span className="text-xl font-medium">Prezzo: </span>
            <span className="font-bold">{trip.prezzo}</span>
          </div>
        </div>
      </div>
      <h1 className="title-section text-4xl">Lista dei participanti</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {utentiRandom.map((utente) => (
          <div key={utente.id}>
            <UsersCard utente={utente} />
          </div>
        ))}
      </div>
    </div>
  );
}
