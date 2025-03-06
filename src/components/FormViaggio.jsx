import { input, inputDiv } from "../style/Input";
import { useState } from "react";

export default function FormViaggio() {
  const [user, setUser] = useState({
    img: null,
    place: "caraibi",
    title: "da no perdere!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora debitis, unde consectetur, labore perferendis atque eum esse, minus voluptatibus dolor. Nesciunt sequi nam repellendus incidunt, a obcaecati error? Illum!",
    start: "",
    finish: "",
    tags: [],
  });
  const handleUser = ({ target }) => {
    setUser((a) => {
      return { ...a, [target.name]: target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <div className="h-full w-full max-w-7xl max-h-screen flex justify-center">
        <form>
          <div className="card_img">
            <div className={`${inputDiv}`}>
              <label className="text-xl font-medium " htmlFor="img">
                Inserisci un'immagine
              </label>
              <input
                name="img"
                type="file"
                className={`${input}`}
                onChange={handleUser}
              />
            </div>
          </div>
          <div className={`${inputDiv}`}>
            <label className="text-xl font-medium " htmlFor="place">
              Destinazione
            </label>
            <input
              name="place"
              id="place"
              type="text"
              className={`${input}`}
              onChange={handleUser}
            />
          </div>
          <div className={`${inputDiv}`}>
            <label className="text-xl font-medium" htmlFor="title">
              Titolo
            </label>
            <input
              name="title"
              id="title"
              type="text"
              className={`${input} `}
              onChange={handleUser}
            />
          </div>
          <div className={`${inputDiv}`}>
            <label className="text-xl font-medium" htmlFor="description">
              Descrizione
            </label>
            <input
              name="description"
              id="description"
              type="text"
              className={`${input}`}
              onChange={handleUser}
            />
          </div>
          <div className={`${inputDiv}`}>
            <label className="text-xl font-medium" htmlFor="start">
              Partenza
            </label>
            <input
              name="start"
              id="start"
              type="date"
              className={`${input}`}
              onChange={handleUser}
            />
          </div>
          <div className={`${inputDiv}`}>
            <label className="text-xl font-medium" htmlFor="finish">
              Ritorno
            </label>
            <input
              name="finish"
              id="finish"
              type="date"
              className={`${input}`}
              onChange={handleUser}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="border-blue cursor-pointer bg-blue-600 shadow-md shadow-black
               p-3 rounded-xl mt-2 text-white font-medium  "
              onClick={handleSubmit}
            >
              Completa
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
