import { relations } from 'drizzle-orm';
import { sessions } from './sessions';
import { users } from './users';

export * as users from './users';
export * as sessions from './sessions';

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
