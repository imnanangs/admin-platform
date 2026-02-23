import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617] text-white">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
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
          className="px-4 py-1.5 mb-6 text-xs font-medium tracking-[0.2em] uppercase rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-md text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
        >
          Error 404 • Page Not Found
        </motion.span>

        <h1 className="text-[120px] md:text-[180px] font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-b from-white to-white/10 leading-none select-none">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white/90">
          Sepertinya Anda tersesat.
        </h2>

        <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Mari
          kembali ke jalur yang benar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link to="/">
            <Button
              variant="solid"
              className="px-8 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              Kembali ke Dashboard
            </Button>
          </Link>

          <Button
            onClick={() => window.history.back()}
            variant="bordered"
            className="px-8 h-12 border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 text-white rounded-full transition-all"
          >
            Halaman Sebelumnya
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl"
      >
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest text-center sm:text-left">
            Lost in Space?
          </span>
          <span className="text-sm font-semibold text-white/80">
            Admin System Support
          </span>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
