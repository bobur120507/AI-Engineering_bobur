import {sqliteTable,text,integer} from "drizzle-orm/sqlite-core";
export const learningState=sqliteTable("learning_state",{userId:text("user_id").primaryKey(),payload:text("payload").notNull(),revision:integer("revision").notNull(),updatedAt:text("updated_at").notNull()});
