import { AlertCircle, RefreshCw, Trash2 } from "lucide-react";
const failures = [
    { id: "1", jobName: "Sync Intercom Users", error: "HTTP 502 Bad Gateway", time: "5 mins ago", retries: 3 },
    { id: "2", jobName: "Daily Database Backup", error: "Disk space low on target volume", time: "Yesterday", retries: 0 }
];
export default function FailuresPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><AlertCircle style={{ color: "var(--color-error)" }} /> Failure Alerts</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {failures.map(f => (<div key={f.id} className="card" style={{ padding: "var(--space-5)", borderLeft: "4px solid var(--color-error)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-3)" }}>
                    <div>
                        <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, marginBottom: 4 }}>{f.jobName}</h3>
                        <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{f.time}</span>
                    </div>
                    <div style={{ display: "flex", gap: "var(--space-2)" }}>
                        <button className="btn btn-ghost btn-sm" style={{ color: "var(--color-text-secondary)" }}><Trash2 size={16} /> Dismiss</button>
                        <button className="btn btn-primary btn-sm"><RefreshCw size={16} /> Retry Now</button>
                    </div>
                </div>
                <div className="mono" style={{ background: "var(--color-error-soft, rgba(239,68,68,0.1))", border: "1px solid rgba(239,68,68,0.2)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", color: "var(--color-error)", fontSize: "13px", fontWeight: 600 }}>
                    {f.error}
                </div>
                <div style={{ marginTop: "var(--space-3)", fontSize: "12px", color: "var(--color-text-tertiary)", fontWeight: 600 }}>
                    Auto-retries attempted: {f.retries}
                </div>
            </div>))}
        </div>
    </div>);
}
