import { serial, text, pgTable, integer } from "drizzle-orm/pg-core";


export const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  age: integer('age').default(0)
});