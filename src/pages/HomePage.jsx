import DestinazioniCard from "../components/DestinazioniCard";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-[1200px] py-6 px-4  my-8 ">
      <h1 className="title-section text-center mb-3.5 text-4xl font-bold ">
        Lista Viaggi
      </h1>
      <DestinazioniCard />
    </div>
  );
}
