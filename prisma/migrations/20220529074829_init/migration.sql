-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "createdAt" TEXT NOT NULL
);
