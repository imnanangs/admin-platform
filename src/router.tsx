import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoaderPage from "@/components/LoaderPage";
import ErrorBoundary from "./components/ErrorBoundary";

const Welcome = lazy(() => import("@/pages/Welcome"));
const NotFound = lazy(() => import("@/pages/Error/404"));

export default function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
