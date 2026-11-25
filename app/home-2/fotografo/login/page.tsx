const messages: Record<string, string> = {
  pendiente: "Tu correo aún no tiene acceso al portal. Pide al administrador que lo autorice.",
  configuracion: "El servicio de acceso no está disponible. Inténtalo más tarde.",
  sesion: "No se completó el inicio de sesión. Vuelve a intentarlo.",
};

export default async function Login({ searchParams }: { searchParams: Promise<{ estado?: string }> }) {
  const { estado } = await searchParams;
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
      <section className="w-full max-w-md rounded-2xl border border-neutral-800 p-8">
        <span className="font-black">NÓMADA <span className="text-orange-500">RACE</span></span>
        <h1 className="mt-8 text-3xl font-bold">Portal de fotógrafos</h1>
        <p className="mt-3 text-neutral-400">Ingresa con el correo de Google autorizado por tu equipo.</p>
        {estado && Object.hasOwn(messages, estado) && <p className="mt-4 text-orange-300" role="status">{messages[estado]}</p>}
        <a className="mt-8 block rounded-xl bg-white text-black text-center p-4 font-semibold" href="/home-2/fotografo/iniciar">Continuar con Google</a>
      </section>
    </main>
  );
}
