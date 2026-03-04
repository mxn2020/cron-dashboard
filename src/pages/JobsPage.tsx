import { Clock, Plus, Play, Pause, Trash2 } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const jobs = [
    { id: "1", name: "Daily Database Backup", schedule: "0 0 * * *", nextRun: "in 12 hours", status: "Active" },
    { id: "2", name: "Sync Analytics Data", schedule: "0 * * * *", nextRun: "in 45 mins", status: "Active" },
    { id: "3", name: "Clear Temp Files", schedule: "0 2 * * *", nextRun: "in 14 hours", status: "Paused" },
    { id: "4", name: "Send Weekly Reports", schedule: "0 8 * * 1", nextRun: "in 2 days", status: "Active" }
];

export default function JobsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Clock style={{ color: "var(--color-accent-primary)" }} /> Cron Jobs</h1>
            <Button variant="primary" icon={<Plus size={16} />}>New Job</Button>
        </div>
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {jobs.map(j => (<Card key={j.id} padding="md" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: j.status === "Active" ? "3px solid var(--color-success)" : "3px solid var(--color-border)" }}>
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: 4 }}>
                        <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700 }}>{j.name}</h3>
                        <Badge variant={j.status === "Active" ? "success" : "secondary"}>{j.status}</Badge>
                    </div>
                    <div style={{ display: "flex", gap: "var(--space-4)", fontSize: "13px", color: "var(--color-text-secondary)", alignItems: "center" }}>
                        <span className="mono" style={{ background: "var(--color-bg-secondary)", padding: "2px 8px", borderRadius: 4 }}>{j.schedule}</span>
                        <span>Next run: <strong>{j.nextRun}</strong></span>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                    {j.status === "Active" ?
                        <Button variant="ghost" size="sm" icon={<Pause size={16} />} /> :
                        <Button variant="ghost" size="sm" icon={<Play size={16} />} />
                    }
                    <Button variant="ghost" size="sm" style={{ color: "var(--color-danger)" }} icon={<Trash2 size={16} />} />
                </div>
            </Card>))}
        </div>
    </div>);
}
