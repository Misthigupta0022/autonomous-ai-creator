export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold">
          Autonomous AI Creator
        </h1>

        <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}