import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import JobsPage from "../pages/JobsPage"; import TimelinePage from "../pages/TimelinePage"; import FailuresPage from "../pages/FailuresPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("Cron Dashboard")).toBeInTheDocument(); });
    it("JobsPage renders", () => { wrap(<JobsPage />); expect(screen.getByText("Daily Database Backup")).toBeInTheDocument(); });
    it("TimelinePage renders", () => { wrap(<TimelinePage />); expect(screen.getAllByText("Sync Intercom Users")[0]).toBeInTheDocument(); });
    it("FailuresPage renders", () => { wrap(<FailuresPage />); expect(screen.getByText("Failure Alerts")).toBeInTheDocument(); });
});
