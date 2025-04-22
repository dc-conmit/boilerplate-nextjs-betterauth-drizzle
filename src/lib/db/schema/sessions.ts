import { pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { users } from "./users"

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
})

// Infer types from schema
export type Session = typeof sessions.$inferSelect
export type NewSession = typeof sessions.$inferInsert
