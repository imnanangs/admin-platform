import { motion } from "framer-motion";

export default function Forbidden() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617] text-white">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/5 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
        >
          Security Protocol • Restricted Access
        </motion.span>

        <h1 className="text-[120px] md:text-[180px] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/10 leading-none select-none">
          403
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white/90">
          Akses Tidak Diizinkan.
        </h2>

        <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
          Maaf, akun Anda tidak memiliki izin yang cukup untuk mengakses halaman
          ini. Silakan hubungi administrator jika Anda merasa ini adalah
          kesalahan.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl"
      >
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest text-center sm:text-left">
            Security Level
          </span>
          <span className="text-sm font-semibold text-amber-500 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Protected Area
          </span>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
