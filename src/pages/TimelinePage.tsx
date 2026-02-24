import { CalendarClock } from "lucide-react";
const timeline = [
    { id: "1", time: "14:00", jobs: [{ name: "Clear Temp Files", duration: "2s", status: "success" }, { name: "Sync Intercom Users", duration: "45s", status: "failed" }] },
    { id: "2", time: "13:45", jobs: [{ name: "Sync Intercom Users", duration: "12s", status: "success" }] },
    { id: "3", time: "13:30", jobs: [{ name: "Sync Intercom Users", duration: "11s", status: "success" }] },
    { id: "4", time: "13:00", jobs: [{ name: "Clear Temp Files", duration: "3s", status: "success" }] }
];
export default function TimelinePage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 800, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><CalendarClock style={{ color: "var(--color-accent-primary)" }} /> Execution Timeline</h1>

        <div className="card" style={{ padding: "var(--space-6)" }}>
            <div style={{ position: "relative", paddingLeft: "var(--space-6)" }}>
                <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: "var(--color-border)" }}></div>
                {timeline.map((t, i) => (<div key={t.id} style={{ position: "relative", marginBottom: i !== timeline.length - 1 ? "var(--space-6)" : 0 }}>
                    <div style={{ position: "absolute", left: "calc(var(--space-6) * -1 - 9px)", top: 4, width: 12, height: 12, borderRadius: "50%", background: "var(--color-bg-card)", border: "2px solid var(--color-accent-primary)", zIndex: 1 }}></div>
                    <div className="mono" style={{ fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: "var(--space-3)" }}>{t.time}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                        {t.jobs.map((j, ji) => (<div key={ji} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-3)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", background: "var(--color-bg-secondary)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: j.status === "success" ? "var(--color-success)" : "var(--color-error)" }}></div>
                                <span style={{ fontWeight: 600 }}>{j.name}</span>
                            </div>
                            <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
                                <span className="mono" style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{j.duration}</span>
                                <span className={`badge ${j.status === "success" ? "badge-green" : "badge-red"}`}>{j.status}</span>
                            </div>
                        </div>))}
                    </div>
                </div>))}
            </div>
        </div>
    </div>);
}
