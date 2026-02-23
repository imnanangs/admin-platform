import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Welcome() {
  const testError = false;
  if (testError) {
    throw new Error("Sengaja Error buat ngetes Error Boundary!");
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617] text-white">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500/5 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase rounded-full border border-white/10 bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-xl"
        >
          Template React • Admin Platform
        </motion.span>

        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/40 leading-tight">
          Welcome to <br />
          <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
            Admin
          </span>{" "}
          Platform
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
          Platform manajemen dashboard modern dengan teknologi terbaru. Didesain
          untuk performa maksimal dan pengalaman visual yang memanjakan mata.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            variant="solid"
            className="px-8 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </Button>

          <Button
            variant="bordered"
            className="px-8 h-12 border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 text-white rounded-full transition-all"
          >
            Documentation
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl"
      >
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">
            Powered by
          </span>
          <span className="text-sm font-semibold text-white/80">
            React 19 & Tailwind 4
          </span>
        </div>
        <div className="h-8 bg-white/10" />
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">
            Environment
          </span>
          <span className="text-sm font-semibold text-emerald-400">
            Production Ready
          </span>
        </div>
      </motion.div>

      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
}
