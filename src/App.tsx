import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import JobsPage from "./pages/JobsPage";
import TimelinePage from "./pages/TimelinePage";
import FailuresPage from "./pages/FailuresPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}><Routes>
        <Route path="/" element={<JobsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/failures" element={<FailuresPage />} />
        <Route path="/settings" element={<JobsPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
