import * as p from 'drizzle-orm/pg-core'

export const userTable = p.pgTable("users",{
    id:p.integer("index").primaryKey().notNull(),
    userName:p.text("user-name").notNull(),
   // email:p.text("Email").notNull(),
    password:p.text("password").notNull()
})

export const User = userTable.$inferSelect
export const NewUser = userTable.$inferInsert
