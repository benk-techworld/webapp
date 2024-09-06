import {sql} from 'drizzle-orm';
import { pgTable, pgEnum, serial, varchar, text, boolean, timestamp, index} from 'drizzle-orm/pg-core';

export const levelEnum = pgEnum('level', ['beginner', 'intermediate', 'advanced']);

export const posts = pgTable('posts',{
    id: serial('id').primaryKey(),
    title: varchar('title',{length: 256}).notNull(),
    description: varchar('description',{length: 500}).notNull(),
    author: varchar('author',{length: 256}).notNull(),
    content: text('content').notNull().default(''),
    tags: text('tags').array().notNull(),
    level: levelEnum('level').notNull().default('beginner'),
    thumbnailURL: varchar('thumbnail_url',{length: 1024}),
    isPublished: boolean('is_published').notNull().default(true),
    created: timestamp('created').notNull().defaultNow(),
    updated: timestamp('updated').$onUpdate(()=>new Date())
},
(table)=>({titleIdx: index('title_idx').on(table.title)})
);
