/*
  Warnings:

  - Added the required column `updatedAt` to the `Solved` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Solved" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Playlist" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Problem_Lists" (
    "id" TEXT NOT NULL,
    "playlist_id" TEXT NOT NULL,
    "problem_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Problem_Lists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_title_created_by_key" ON "Playlist"("title", "created_by");

-- CreateIndex
CREATE UNIQUE INDEX "Problem_Lists_playlist_id_problem_id_key" ON "Problem_Lists"("playlist_id", "problem_id");

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem_Lists" ADD CONSTRAINT "Problem_Lists_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem_Lists" ADD CONSTRAINT "Problem_Lists_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
