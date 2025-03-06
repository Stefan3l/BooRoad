import FormViaggio from "../components/FormViaggio";

export default function Amministrazione() {
  return (
    <div className="container mx-auto max-w-[1200px] py-6 px-4  my-8">
      <h1 className="title-section text-center mb-8 text-3xl">
        Crea il viaggio
      </h1>
      <FormViaggio />
    </div>
  );
}
