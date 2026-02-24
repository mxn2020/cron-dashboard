import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    jobs: defineTable({ name: v.string(), schedule: v.string(), active: v.boolean(), command: v.string(), lastRunStatus: v.optional(v.string()) }),
    executions: defineTable({ jobId: v.id("jobs"), status: v.string(), durationMs: v.number(), logs: v.string(), timestamp: v.string() }).index("by_job", ["jobId"]),
    alerts: defineTable({ jobId: v.id("jobs"), errorMsg: v.string(), resolved: v.boolean(), timestamp: v.string() })
});
