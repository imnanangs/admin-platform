import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoaderPage from "@/components/LoaderPage";
import ErrorBoundary from "./components/ErrorBoundary";
import DefaultLayout from "@/layouts/DefaultLayout";

const Welcome = lazy(() => import("@/pages/Welcome"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));

const NotFound = lazy(() => import("@/pages/Error/404"));

export default function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path="/" element={<Welcome />} />

          <Route element={<DefaultLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
