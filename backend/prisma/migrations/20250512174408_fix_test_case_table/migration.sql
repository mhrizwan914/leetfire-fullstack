/*
  Warnings:

  - You are about to drop the column `std_input` on the `Test_Case` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Test_Case" DROP COLUMN "std_input",
ADD COLUMN     "std_output" TEXT;
