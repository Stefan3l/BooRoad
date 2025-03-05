import destinazioni from "../data/Destinazioni";
import Stars from "./Stars";

export default function DestinazioniCard() {
  return (
    <div className="space-y-8">
      {destinazioni.map((elm) => {
        const starsID = Math.ceil(elm.vote);
        const emptyStarsID = 5 - starsID;
        return (
          <div
            key={elm.id}
            className="bg-white flex flex-col md:flex-row hover:shadow-green-600  shadow-xl rounded-2xl p-2.5"
          >
            <div className="w-full md:w-4/10">
              <img
                className="h-full w-full rounded-2xl  "
                src={elm.image}
                alt={elm.nome}
              />
            </div>
            <div className="w-full md:w-6/10 px-2.5 py-2.5">
              <h1 className="text-3xl font-medium">{elm.nome}</h1>
              <div className="text-amber-400 mt-2">
                <Stars stars={starsID} emptyStars={emptyStarsID} />
              </div>
              <p className="mt-4 text-lg font-medium">{elm.descrizione}</p>
              <div className="space-y-2 border my-3.5 font-medium text-center py-1.5 rounded-xl shadow">
                <div>
                  <p>Data Inizio:</p>
                  <p>{elm.dataInizio}</p>
                </div>
                <i className="fa-solid fa-arrow-down shadow"></i>
                <div>
                  <p>Data Fine:</p>
                  <p>{elm.dataFine}</p>
                </div>
              </div>
              <div className="text-center my-4 text-2xl ">
                <span className="text-xl font-medium">Prezzo: </span>
                <span className="font-bold">{elm.prezzo}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
