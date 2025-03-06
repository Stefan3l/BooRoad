//import Home from ""; // Inserire rotta
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <>
      <label htmlFor="mail">Indirizzo Mail</label>
      <br />
      <input id="mail" type="text" required />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input id="password" type="text" required />
      <br />
      <br />
      <button type="button">Entra</button>
      {/* inserire con il NavLink la rotta alla pagina amministratori */}
    </>
  );
};
