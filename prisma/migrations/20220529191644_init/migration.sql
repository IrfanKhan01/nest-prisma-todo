/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Todo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL
);
INSERT INTO "new_Todo" ("id", "isCompleted", "task") SELECT "id", "isCompleted", "task" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
