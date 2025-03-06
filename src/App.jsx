import FormViaggio from "./component/form_viaggio";
import FormRubrica from "./component/form_rubrica";
import Login from "./component/login";
export default function App() {
  return (
    <>
      <h1>BooRoad</h1>
      <Login />
      <FormRubrica />
      <FormViaggio />
    </>
  );
}
