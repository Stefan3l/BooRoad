import UsersCard from "../components/UsersCard";

export default function TripPage() {
  return (
    <div>
      <h3>Dati Viaggio</h3>
      {/* <div>
          {destinazioniVacanza.map((destinazioneVacanza) => {
            return (
              <ul>
                <li>{destinazioneVacanza.nome}</li>
                <li>{destinazioneVacanza.descrizione}</li>
              </ul>
            );
          })}
        </div> */}
      <h3>Rubrica utenti</h3>
      <div className="container mx-auto max-w-[1200px] py-6 px-4 bg-gray-300 rounded shadow-xl mt-5 ">
        <UsersCard />
      </div>
    </div>
  );
}
