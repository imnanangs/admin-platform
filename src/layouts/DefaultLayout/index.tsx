import { useState } from "react";
import {
  HiOutlineSquares2X2,
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineArrowLeftOnRectangle,
  HiChevronLeft,
  HiBars3BottomLeft,
  HiOutlineLightBulb,
  HiInformationCircle,
} from "react-icons/hi2";
import {
  RiSearchLine,
  RiNotification3Line,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Outlet } from "react-router-dom";

const SIDEBAR_MENU = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <HiOutlineSquares2X2 size={20} />,
    active: true,
  },
  {
    id: "alert",
    label: "Alerts",
    icon: <HiInformationCircle size={20} />,
    badge: "12",
  },
  {
    id: "analytics",
    label: "Statistik",
    icon: <HiOutlineChartBar size={20} />,
  },
];

const SETTINGS_MENU = [
  { id: "settings", label: "Settings", icon: <HiOutlineCog6Tooth size={20} /> },
  {
    id: "logout",
    label: "Sign Out",
    icon: <HiOutlineArrowLeftOnRectangle size={20} />,
    color: "text-red-400 hover:bg-red-500/10 hover:text-red-500",
  },
];

export default function DefaultLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 p-3 overflow-hidden font-sans flex flex-col lg:flex-row gap-3">
      <aside
        className={`
          fixed inset-y-3 left-3 z-50 bg-slate-900 rounded-2xl p-4 flex flex-col justify-between shadow-xl transition-all duration-300 ease-in-out
          lg:relative lg:inset-y-0 lg:left-0 
          lg:h-[calc(100vh-24px)]
          ${isMobileOpen ? "translate-x-0 w-64" : "-translate-x-[110%] lg:translate-x-0"}
          ${isCollapsed ? "lg:w-20" : "lg:w-64"}
        `}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3 top-6.5 bg-emerald-500 text-white size-6 rounded-full items-center justify-center shadow-lg z-50 border-2 border-slate-50"
        >
          <HiChevronLeft
            className={`transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </button>

        <div className="flex flex-col h-full">
          <div
            className={`flex items-center mb-8 ${isCollapsed ? "justify-center" : "px-2 gap-3"}`}
          >
            <div className="min-w-10 size-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <span className="font-black text-lg italic tracking-tighter">
                NS
              </span>
            </div>
            {!isCollapsed && (
              <span className="text-white font-bold tracking-tight text-xl truncate">
                NSDEV
              </span>
            )}
          </div>

          <nav className="flex-1 space-y-2">
            {!isCollapsed && (
              <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold mb-4 px-2 opacity-60">
                Menu Utama
              </p>
            )}
            {SIDEBAR_MENU.map((item) => (
              <button
                key={item.id}
                className={`group relative flex items-center rounded-xl transition-all duration-300 
                  ${isCollapsed ? "size-12 justify-center mx-auto" : "w-full p-3 justify-between"}
                  ${item.active ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"}
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`${item.active ? "text-white" : "group-hover:text-emerald-400 transition-colors"}`}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="text-sm font-semibold truncate">
                      {item.label}
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="bg-emerald-400/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-lg">
                        {item.badge}
                      </span>
                    )}
                    {item.active && <RiArrowRightSLine size={16} />}
                  </div>
                )}
                {isCollapsed && item.badge && (
                  <span className="absolute top-2 right-2 size-2 bg-emerald-500 rounded-full border border-slate-900"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            {!isCollapsed && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-2 text-emerald-400">
                  <HiOutlineLightBulb size={20} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Pro Tips
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Gunakan shortcut{" "}
                  <kbd className="bg-white/10 px-1 rounded text-slate-200">
                    ALT + S
                  </kbd>{" "}
                  untuk pencarian cepat data.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 space-y-1">
              {SETTINGS_MENU.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center transition-all duration-200 font-medium text-sm rounded-xl
                    ${isCollapsed ? "size-12 justify-center mx-auto" : "w-full p-3 gap-3"}
                    ${item.color || "text-slate-400 hover:bg-white/5 hover:text-slate-200"}
                  `}
                >
                  {item.icon}
                  {!isCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col gap-3 h-full overflow-hidden">
        <header className="h-16 min-h-16 bg-white/80 backdrop-blur-xl border border-white rounded-2xl px-4 lg:px-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              <HiBars3BottomLeft size={24} />
            </button>
            <div className="relative w-72 group hidden sm:block">
              <RiSearchLine
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Cari data..."
                className="w-full bg-slate-100/50 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-emerald-500/10 transition-all outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors relative">
              <RiNotification3Line size={22} />
              <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="hidden sm:block h-6 w-px bg-slate-200 mx-1"></div>
            <div className="flex items-center gap-3 lg:pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  Nanang Supriatna
                </p>
                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-tighter">
                  Administrator
                </p>
              </div>
              <div className="size-9 lg:size-10 bg-linear-to-tr from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                NS
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-white border border-slate-200 rounded-2xl overflow-y-auto overflow-x-hidden scrollbar-hide">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
