import { Activity } from "lucide-react";
import { Card, Badge } from "@geenius-ui/react-css";

const executions = [
    { id: "1", job: "Daily Database Backup", time: "2026-03-01 00:00:00", duration: "45s", status: "Success" },
    { id: "2", job: "Sync Analytics Data", time: "2026-03-01 01:00:00", duration: "120s", status: "Failed" },
    { id: "3", job: "Clear Temp Files", time: "2026-03-01 02:00:00", duration: "12s", status: "Success" },
    { id: "4", job: "Send Weekly Reports", time: "2026-03-01 08:00:00", duration: "240s", status: "Success" }
];

export default function ExecutionsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Activity style={{ color: "var(--color-accent-primary)" }} /> Executions</h1>
        <Card padding="none">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Job</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Run Time</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Duration</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {executions.map(e => (<tr key={e.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <td style={{ padding: "12px 16px", fontSize: "14px", fontWeight: 600 }}>{e.job}</td>
                        <td style={{ padding: "12px 16px", fontSize: "13px", color: "var(--color-text-secondary)" }}>{e.time}</td>
                        <td style={{ padding: "12px 16px", fontSize: "13px", fontFamily: "var(--font-mono)" }}>{e.duration}</td>
                        <td style={{ padding: "12px 16px" }}><Badge variant={e.status === "Success" ? "success" : "error"}>{e.status}</Badge></td>
                    </tr>))}
                </tbody>
            </table>
        </Card>
    </div>);
}
