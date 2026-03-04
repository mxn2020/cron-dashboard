import { Settings, Bell, Shield } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";

export default function SettingsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 800 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Settings style={{ color: "var(--color-accent-primary)" }} /> Settings</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <Card padding="lg">
                <h2 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Bell size={18} /> Notifications</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <div>
                        <Label style={{ fontSize: "14px", fontWeight: 600, marginBottom: 8, display: "block" }}>Failure Alerts Email</Label>
                        <Input type="email" defaultValue="alerts@openclaw.dev" />
                    </div>
                    <div>
                        <Label style={{ fontSize: "14px", fontWeight: 600, marginBottom: 8, display: "block" }}>Slack Webhook URL</Label>
                        <Input type="text" defaultValue="https://hooks.slack.com/services/T000..." />
                    </div>
                </div>
            </Card>

            <Card padding="lg">
                <h2 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Shield size={18} /> Security</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <div>
                        <Label style={{ fontSize: "14px", fontWeight: 600, marginBottom: 8, display: "block" }}>API Key</Label>
                        <div style={{ display: "flex", gap: "var(--space-2)" }}>
                            <Input type="password" defaultValue="sk_live_89f2j29f82" />
                            <Button variant="outline">Regenerate</Button>
                        </div>
                        <p style={{ fontSize: "12px", color: "var(--color-text-tertiary)", marginTop: 4 }}>Used for triggering jobs via HTTP API</p>
                    </div>
                </div>
            </Card>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="primary">Save Changes</Button>
            </div>
        </div>
    </div>);
}
