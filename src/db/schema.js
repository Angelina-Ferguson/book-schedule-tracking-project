import { date, datetime, json, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
// use the command: npx drizzle-kit push
// this command will directly apply changes to the database, good for testing local schema changes without need for migration management


export const users = mysqlTable('users', {
    id: int().primaryKey().autoincrement().unique(),
    username: varchar({length:20}).notNull(),
    password: varchar({length:20}).notNull(),
    email: varchar({length:255}).notNull().unique(),
    avatar_photo: varchar({length:255}),
    bio: varchar({length:255}),
    subscribed_shelflist_ids: json('playlists'),
});

export const playlists = mysqlTable('playlists', {
    id: int().primaryKey().autoincrement().unique(),
    creator_id: varchar({length:20}).notNull(),
    created_at: datetime().notNull(),
    updated_at: datetime().notNull(),
    books: json('books').notNull(),
    cover_art: varchar({length:255}),
    description: varchar({length: 100}),
});


export const books = mysqlTable('books', {
    isbn: int().primaryKey().unique(),
    title: varchar({length: 100}),
    author_id: int().notNull(),
    cover_art: varchar({length:255}),
    primary_genre: varchar({length:20}).notNull(),
})


export const authors = mysqlTable('authors', {
    id: int().primaryKey().unique(),
    first_name: varchar({length: 20}),
    last_name: varchar({length: 20}),
    books: json('books').notNull(),
})


export const alerts = mysqlTable('alerts', {
    id: int().primaryKey().unique(),
    created_at: datetime().notNull(),
    updated_at: datetime().notNull(),
    book_isbn: int().notNull(),
    alert_type: varchar({length:10}),
    alert_date: date().notNull(),
})

