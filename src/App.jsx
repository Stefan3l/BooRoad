import { BrowserRouter, Routes, Route } from "react-router";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

import ListaUtentiPage from "./pages/ListaUtentiPage";
import HomePage from "./pages/HomePage";
import TripsPage from "./pages/TripsPage";
import Amministrazione from "./pages/Amministrazione";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path="/utenti" Component={ListaUtentiPage}></Route>
          <Route path="/:id" Component={TripsPage}></Route>
          <Route path="/amministrazione" Component={Amministrazione}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
