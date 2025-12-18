export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Ackunity Project</h1>
      <div className="p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700">
        <p className="text-2xl font-mono text-yellow-400 animate-pulse">
          Loading from Rust API...
        </p>
      </div>
    </main>
  );
}
