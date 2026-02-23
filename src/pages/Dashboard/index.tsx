export default function Dashboard() {
  return (
    <div className="h-screen w-screen p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight">
            Overview Panel
          </h1>
          <p className="text-slate-500 text-sm">
            Kelola dan pantau seluruh data sistem Anda.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 sm:flex-none bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
            Filter
          </button>
          <button className="flex-1 sm:flex-none bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all">
            Download
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-28 rounded-2xl bg-slate-50 border border-slate-100 border-dashed"
          ></div>
        ))}
      </div>

      <div className="h-96 rounded-2xl bg-slate-50 border border-slate-100 border-dashed flex items-center justify-center text-slate-400 font-medium italic">
        Area Konten Utama
      </div>
    </div>
  );
}
