/*
  Warnings:

  - Added the required column `active_expires` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "active_expires" BIGINT NOT NULL,
    CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_session" ("expiresAt", "id", "user_id") SELECT "expiresAt", "id", "user_id" FROM "session";
DROP TABLE "session";
ALTER TABLE "new_session" RENAME TO "session";
CREATE INDEX "session_user_id_idx" ON "session"("user_id");
PRAGMA foreign_key_check("session");
PRAGMA foreign_keys=ON;
