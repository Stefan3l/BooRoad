export default function UsersCard({ utente }) {
  return (
    <div>
      <div className="w-2/2 max-w-sm mx-auto bg-white shadow-md shadow-black hover:scale-102 cursor-pointer rounded-lg overflow-hidden border">
        <div className="p-4 flex items-center">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900">
              {utente.nome}
            </h2>
          </div>
        </div>
        <div className="border-t flex w-full ">
          <div className="w-6/10 border-r-2 ">
            <button className="flex-1 py-2 text-sm ml-2 text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center justify-center gap-2 ">
              <i className="fa-solid fa-envelope text-violet-700"></i>
              <span className="break-all">{utente.email}</span>
            </button>
          </div>
          <div className="w-4/10">
            <button className="flex-1 py-2 text-sm ml-2 text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-green-600"></i>
              <span>{utente.telefono}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
