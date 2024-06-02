/*
  Warnings:

  - You are about to drop the column `active_expires` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `idle_expires` on the `session` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_session" ("id", "user_id") SELECT "id", "user_id" FROM "session";
DROP TABLE "session";
ALTER TABLE "new_session" RENAME TO "session";
CREATE INDEX "session_user_id_idx" ON "session"("user_id");
PRAGMA foreign_key_check("session");
PRAGMA foreign_keys=ON;
