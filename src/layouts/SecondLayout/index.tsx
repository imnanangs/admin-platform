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
    icon: <HiOutlineSquares2X2 size={22} />,
    active: true,
  },
  {
    id: "alert",
    label: "Alerts",
    icon: <HiInformationCircle size={22} />,
    badge: "12",
  },
  {
    id: "analytics",
    label: "Statistik",
    icon: <HiOutlineChartBar size={22} />,
  },
];

const SETTINGS_MENU = [
  { id: "settings", label: "Settings", icon: <HiOutlineCog6Tooth size={20} /> },
  {
    id: "logout",
    label: "Sign Out",
    icon: <HiOutlineArrowLeftOnRectangle size={20} />,
    color: "text-rose-400 hover:bg-rose-500/10 hover:text-rose-500",
  },
];

export default function DefaultLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-[#f8fafc] text-slate-900 overflow-hidden font-sans flex flex-col lg:flex-row">
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-300 ease-in-out
          lg:relative 
          ${isMobileOpen ? "translate-x-0 w-72" : "-translate-x-full lg:translate-x-0"}
          ${isCollapsed ? "lg:w-20" : "lg:w-72"}
        `}
      >
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute -right-3.5 top-8 bg-white border border-slate-200 text-slate-400 size-7 rounded-full items-center justify-center shadow-sm z-50 hover:text-indigo-600 hover:border-indigo-100 transition-colors"
        >
          <HiChevronLeft
            className={`transition-transform duration-500 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </button>

        <div className="flex flex-col h-full">
          <div className={`h-20 flex items-center px-6 mb-4`}>
            <div className="min-w-10 size-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-105">
              <span className="font-bold text-lg">NS</span>
            </div>
            {!isCollapsed && (
              <div className="ml-3 overflow-hidden">
                <span className="text-slate-900 font-bold tracking-tight text-xl block">
                  ModernUI
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                  Enterprise v1.0
                </span>
              </div>
            )}
          </div>

          <nav className="flex-1 px-3 space-y-1">
            {!isCollapsed && (
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-4 px-3">
                Main Navigation
              </p>
            )}
            {SIDEBAR_MENU.map((item) => (
              <button
                key={item.id}
                className={`group relative flex items-center rounded-xl transition-all duration-200 
                  ${isCollapsed ? "size-12 justify-center mx-auto" : "w-full py-3 px-4 justify-between"}
                  ${item.active ? "bg-indigo-50 text-indigo-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`${item.active ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500"}`}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="text-[15px] font-semibold">
                      {item.label}
                    </span>
                  )}
                </div>
                {!isCollapsed && (
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-5 text-center">
                        {item.badge}
                      </span>
                    )}
                    <RiArrowRightSLine
                      className={`opacity-0 group-hover:opacity-100 transition-opacity ${item.active ? "opacity-100" : ""}`}
                      size={18}
                    />
                  </div>
                )}
                {isCollapsed && item.badge && (
                  <span className="absolute top-2 right-2 size-2 bg-indigo-600 rounded-full border-2 border-white"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            {!isCollapsed && (
              <div className="bg-linear-to-br from-indigo-600 to-violet-700 rounded-2xl p-5 mb-6 text-white relative overflow-hidden shadow-xl shadow-indigo-100">
                <div className="relative z-10">
                  <div className="bg-white/20 size-8 rounded-lg flex items-center justify-center mb-3">
                    <HiOutlineLightBulb size={18} />
                  </div>
                  <p className="text-xs font-medium opacity-80 mb-1">
                    Upgrade Pro
                  </p>
                  <p className="text-[13px] font-semibold leading-snug mb-3">
                    Dapatkan akses statistik tanpa batas
                  </p>
                  <button className="w-full py-2 bg-white text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors">
                    Pelajari Selengkapnya
                  </button>
                </div>
                <div className="absolute -right-4 -bottom-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 space-y-1">
              {SETTINGS_MENU.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center transition-all duration-200 font-semibold text-[14px] rounded-xl
                    ${isCollapsed ? "size-12 justify-center mx-auto" : "w-full py-3 px-4 gap-3"}
                    ${item.color || "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
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
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <HiBars3BottomLeft size={24} />
            </button>
            <div className="relative w-64 group hidden md:block">
              <RiSearchLine
                className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-transparent border-none py-2 pl-7 pr-4 text-sm focus:ring-0 transition-all outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-full transition-all relative">
              <RiNotification3Line size={22} />
              <span className="absolute top-2.5 right-2.5 size-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none mb-1 group-hover:text-indigo-600 transition-colors">
                  Nanang Supriatna
                </p>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  Super Admin
                </p>
              </div>
              <div className="size-10 bg-slate-100 rounded-full flex items-center justify-center text-indigo-600 font-bold border-2 border-white ring-1 ring-slate-200 shadow-sm overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Nanang+Supriatna&background=4f46e5&color=fff"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
