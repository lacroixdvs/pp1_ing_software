export default function Contacto() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="mb-6 text-gray-500">Dejanos tu mensaje</p>

      <form className="flex flex-col gap-4 w-full max-w-md">
        <input 
          type="text" 
          placeholder="Nombre" 
          className="p-2 border rounded"
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="p-2 border rounded"
        />
        <textarea 
          placeholder="Mensaje"
          className="p-2 border rounded"
        ></textarea>

        <button className="bg-blue-500 text-white p-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
}