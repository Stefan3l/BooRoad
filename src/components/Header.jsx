export default function Header() {
  return (
    <header className=" bg-amber-600 py-4 px-6 flex justify-between items-center gap-2 shadow-black shadow-md ">
      <div className="w-30">
        <img className="rounded-full" src="../image/logo.jpg" alt="Logo" />
      </div>
      <h1 className="text-4xl font-extrabold text-white">Booroad</h1>
      <div className="w-30"></div>
    </header>
  );
}
