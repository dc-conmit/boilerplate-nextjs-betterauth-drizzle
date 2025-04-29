import { pgTable, uuid, timestamp, text, pgEnum, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export enum EUserRole {
  PropertyManager = "property_manager",
  ServiceProvider = "service_provider"
};

export const userRoleEnum = pgEnum("user_roles", [
  EUserRole.PropertyManager,
  EUserRole.ServiceProvider
]);

export const users = pgTable("users", {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(false),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
  role: userRoleEnum('role').notNull()
});

// Infer types from schema
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// Zod schemas
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

// Enhanced schema validation for forms
insertUserSchema.extend({
    email: z.string()
        .email("Please enter a valid email address")
        .min(5, "Email is too short")
        .max(255, "Email is too long"),
    
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password is too long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  
    role: z.enum(userRoleEnum.enumValues, {
        required_error: "Please select a role",
        invalid_type_error: "Role must be either property manager or service provider",
    }),
});
