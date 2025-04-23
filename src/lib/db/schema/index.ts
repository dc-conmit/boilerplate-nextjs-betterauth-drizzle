import { relations } from 'drizzle-orm'
import { sessions } from './auth'
import { users } from './user'

export * from './auth'
export * from './user'

// Relations

export const sessionUserRelation = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}))

export const userSessionsRelation = relations(users, ({ many }) => ({
  sessions: many(sessions),
}))
