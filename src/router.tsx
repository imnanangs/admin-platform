import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoaderPage from "@/components/LoaderPage";

const Welcome = lazy(() => import("@/pages/Welcome"));

export default function Router() {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Suspense>
  );
}
