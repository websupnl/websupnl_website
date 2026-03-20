import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-[#FFA500] mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-3">Pagina niet gevonden</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          Deze pagina bestaat niet of is verplaatst. Geen paniek — je kunt
          gewoon terug naar de homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#FFA500] hover:bg-[#FFCC66] text-[#09101D] font-bold rounded-full text-sm transition-all duration-200"
          >
            Terug naar home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full text-sm transition-all duration-200"
          >
            Contact opnemen
          </Link>
        </div>
      </div>
    </div>
  );
}
