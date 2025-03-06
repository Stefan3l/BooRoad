import { input, inputDiv } from "./style/input";
import { useState } from "react";

export default () => {
  const [trip, setTrip] = useState({
    name: "caraibi",
    sourname: "da no perdere!",
    FC: "",
    birth_date: "",
    trip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora debitis, unde consectetur, labore perferendis atque eum esse, minus voluptatibus dolor. Nesciunt sequi nam repellendus incidunt, a obcaecati error? Illum!",
  });
  const handleTrip = ({ target }) => {
    setTrip((a) => {
      return { ...a, [target.name]: target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trip);
  };
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <div className={`${inputDiv}`}>
          <input
            name="name"
            id="name"
            type="text"
            className={`${input}`}
            onChange={handleTrip}
          />
        </div>
        <br />
        <label htmlFor="sourname">Sourname</label>
        <br />
        <div className={`${inputDiv}`}>
          <input
            name="sourname"
            id="sourname"
            type="text"
            className={`${input}`}
            onChange={handleTrip}
          />
        </div>
        <br />
        <label htmlFor="FC">Fiscal Code</label>
        <br />
        <div className={`${inputDiv}`}>
          <input
            name="FC"
            id="FC"
            type="text"
            className={`${input}`}
            onChange={handleTrip}
          />
        </div>
        <br />
        <label htmlFor="birth_date">Birth Date</label>
        <br />
        <div className={`${inputDiv}`}>
          <input
            name="birth_date"
            id="birth_date"
            type="text"
            className={`${input}`}
            onChange={handleTrip}
          />
        </div>
        <br />
        <label htmlFor="trip">Trip</label>
        <br />
        <div className={`${inputDiv}`}>
          <input
            name="trip"
            id="trip"
            type="checkbox"
            className={`${input}`}
            onChange={handleTrip}
          />
        </div>
        <label htmlFor="trip">Tags</label>
        <br />
        <div className={`${inputDiv}`}>
          <input
            name="trip"
            id="trip1"
            type="checkbox"
            className={`${input}`}
            onChange={handleTrip}
          />
        </div>
        <label htmlFor="tags1">Cane</label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Completata
        </button>
      </form>
    </>
  );
};
