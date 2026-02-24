import { LayoutDashboard, Plus, Play, Pause, MoreVertical } from "lucide-react";
const jobs = [
    { id: "1", name: "Daily Database Backup", schedule: "0 0 * * *", lastRun: "2 hours ago", status: "success", active: true },
    { id: "2", name: "Sync Intercom Users", schedule: "*/15 * * * *", lastRun: "5 mins ago", status: "failed", active: true },
    { id: "3", name: "Weekly Digest Email", schedule: "0 9 * * 1", lastRun: "3 days ago", status: "success", active: false },
    { id: "4", name: "Clear Temp Files", schedule: "0 * * * *", lastRun: "45 mins ago", status: "success", active: true }
];
export default function JobsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><LayoutDashboard style={{ color: "var(--color-accent-primary)" }} /> Jobs Overview</h1>
            <button className="btn btn-primary"><Plus size={16} /> Create Job</button>
        </div>

        <div className="card">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Job Name</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Schedule</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Status</th>
                        <th style={{ textAlign: "left", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Last Run</th>
                        <th style={{ textAlign: "right", padding: "16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)", fontWeight: 700 }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(j => (<tr key={j.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <td style={{ padding: "16px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: j.active ? "var(--color-success)" : "var(--color-text-tertiary)" }}></div>
                                <span style={{ fontWeight: 600 }}>{j.name}</span>
                            </div>
                        </td>
                        <td style={{ padding: "16px" }}><span className="badge badge-amber mono" style={{ fontSize: 12, textTransform: "none" }}>{j.schedule}</span></td>
                        <td style={{ padding: "16px" }}><span className={`badge ${j.status === "success" ? "badge-green" : "badge-red"}`}>{j.status}</span></td>
                        <td style={{ padding: "16px" }}><span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{j.lastRun}</span></td>
                        <td style={{ padding: "16px", textAlign: "right" }}>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-1)" }}>
                                <button className="btn btn-ghost btn-sm" style={{ padding: 8 }}>{j.active ? <Pause size={16} /> : <Play size={16} />}</button>
                                <button className="btn btn-ghost btn-sm" style={{ padding: 8 }}><MoreVertical size={16} /></button>
                            </div>
                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    </div>);
}
