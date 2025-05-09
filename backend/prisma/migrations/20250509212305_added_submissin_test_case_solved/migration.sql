-- CreateEnum
CREATE TYPE "SUBMISSION_STATUS" AS ENUM ('accepted', 'wrong');

-- CreateEnum
CREATE TYPE "TEST_CASE_STATUS" AS ENUM ('failed', 'passed');

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "submitted_by" TEXT NOT NULL,
    "problem_id" TEXT NOT NULL,
    "source_code" JSONB NOT NULL,
    "language" TEXT NOT NULL,
    "std_input" TEXT,
    "std_output" TEXT,
    "std_error" TEXT,
    "compile_output" TEXT,
    "status" "SUBMISSION_STATUS" NOT NULL,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test_Case" (
    "id" TEXT NOT NULL,
    "submission_id" TEXT NOT NULL,
    "test_case" INTEGER NOT NULL,
    "status" "TEST_CASE_STATUS" NOT NULL,
    "std_input" TEXT,
    "expected_output" TEXT,
    "std_error" TEXT,
    "compile_output" TEXT,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Test_Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solved" (
    "id" TEXT NOT NULL,
    "solved_by" TEXT NOT NULL,
    "problem_id" TEXT NOT NULL,

    CONSTRAINT "Solved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Solved_solved_by_problem_id_key" ON "Solved"("solved_by", "problem_id");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_submitted_by_fkey" FOREIGN KEY ("submitted_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test_Case" ADD CONSTRAINT "Test_Case_submission_id_fkey" FOREIGN KEY ("submission_id") REFERENCES "Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solved" ADD CONSTRAINT "Solved_solved_by_fkey" FOREIGN KEY ("solved_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solved" ADD CONSTRAINT "Solved_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
