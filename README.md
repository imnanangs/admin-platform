# 🚀 Admin Platform - NSDEV

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/UI-HeroUI-FF4B5C)](https://heroui.com/)

**NSDEV Admin Platform** adalah dashboard manajemen modern dengan estetika *Glassmorphism* dan performa maksimal. Dibangun menggunakan teknologi *bleeding-edge* untuk memberikan pengalaman pengguna yang responsif, intuitif, dan elegan.

---

## ✨ Fitur Unggulan

- **🌓 Adaptive Theming**: Perpindahan tema *Dark* & *Light* yang mulus via `themeSwitch.tsx`.
- **🧩 HeroUI Integration**: Komponen UI yang konsisten, aksesibel, dan estetik.
- **🎭 Fluid Animations**: Transisi antar elemen menggunakan **Framer Motion**.
- **🛠️ Custom Hooks**: Manajemen waktu real-time (`useDateTime`) dan kontrol `useFullscreen`.
- **📊 Data Visualization**: Panel overview yang ringkas untuk memantau performa sistem.

---

## 📂 Struktur Folder

Arsitektur proyek yang modular dan *scalable*:

```bash
admin-platform/
├── 📁 public/              # Aset statis (Logo, Favicon)
├── 📁 src/                 # Source code utama
│   ├── 📁 assets/          # Global styles & media assets
│   ├── 📁 components/      # Reusable UI components (HeroUI based)
│   ├── 📁 constants/       # Konfigurasi & menu-data.tsx
│   ├── 📁 contexts/        # Provider (themeSwitch.tsx, Auth)
│   ├── 📁 hooks/           # Custom React hooks (useDateTime, useFullscreen)
│   ├── 📁 layouts/         # Layout wrapper (Sidebar & Navbar)
│   ├── 📁 pages/           # View utama (Dashboard, Alerts, Statistik)
│   ├── 📁 tests/           # Vitest & React Testing Library
│   ├── 📁 utils/           # Utility functions (getDateNow.ts)
│   ├── 📄 App.tsx          # Root entry & Providers
│   ├── 📄 main.tsx         # Render aplikasi
│   ├── 📄 router.tsx       # Konfigurasi React Router 7
│   └── 📄 index.css        # Tailwind CSS 4 Entry
├── 📄 .npmrc               # pnpm configuration
├── 📄 eslint.config.js     # Linting rules
├── 📄 tailwind.config.ts   # Tailwind 4 configuration
└── 📄 vite.config.ts       # Vite 6 configuration

## 🎨 Design Palette

Desain ini menggunakan kombinasi warna yang profesional dan modern untuk menjaga kenyamanan visual pengguna:

| Elemen | Hex Code | Visual |
| :--- | :--- | :--- |
| **Primary (Emerald)** | `#10B981` | ![#10B981](https://via.placeholder.com/15/10B981?text=+) |
| **Secondary (Slate)** | `#64748B` | ![#64748B](https://via.placeholder.com/15/64748B?text=+) |
| **Success (Mint)** | `#D1FAE5` | ![#D1FAE5](https://via.placeholder.com/15/D1FAE5?text=+) |
| **Background (Light)** | `#F8FAFC` | ![#F8FAFC](https://via.placeholder.com/15/F8FAFC?text=+) |

---

## 🛠️ Tech Stack

Aplikasi ini dibangun dengan teknologi *bleeding-edge* untuk performa dan skalabilitas maksimal:

* **Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite 6](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [HeroUI](https://heroui.com/), [Framer Motion](https://www.framer.com/motion/)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand), [TanStack Query v5](https://tanstack.com/query/latest)
* **Testing:** [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/)
* **Utilities:** Axios, Zod, React Hook Form, Dayjs

---

## 🚀 Memulai Pengembangan

Pastikan Anda telah menginstal [pnpm](https://pnpm.io/) sebagai *package manager* utama.

### 1. Clone & Install
```bash
# Clone repositori
git clone [https://github.com/imnanangs/admin-platform.git](https://github.com/imnanangs/admin-platform.git)

# Masuk ke direktori
cd admin-platform

# Install dependensi
pnpm install

### 2. Jalankan Mode Development
```bash
pnpm dev

### 3. Build & Test
```bash
pnpm build   # Build untuk produksi
pnpm test    # Jalankan Vitest untuk pengujian---

Dibuat dengan dedikasi tinggi oleh **Nanang Supriatna (NSDEV)**.
