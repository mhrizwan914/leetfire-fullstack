-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "PROBLEM_DIFFICULTY" AS ENUM ('easy', 'medium', 'hard');

-- CreateEnum
CREATE TYPE "SUBMISSION_STATUS" AS ENUM ('accepted', 'wrong');

-- CreateEnum
CREATE TYPE "TEST_CASE_STATUS" AS ENUM ('failed', 'passed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL DEFAULT 'https://placehold.co/600x400/orange/white',
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" "USER_ROLE" NOT NULL DEFAULT 'user',
    "refresh_token" TEXT,
    "email_verification_token" TEXT,
    "email_verification_token_expiry" TIMESTAMP(3),
    "password_reset_token" TEXT,
    "password_reset_token_expiry" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Problem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" "PROBLEM_DIFFICULTY" NOT NULL,
    "tags" TEXT[],
    "created_by" TEXT NOT NULL,
    "examples" JSONB NOT NULL,
    "constraints" TEXT NOT NULL,
    "hints" TEXT,
    "editorial" TEXT,
    "test_cases" JSONB NOT NULL,
    "code_snippets" JSONB NOT NULL,
    "reference_solutions" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "submitted_by" TEXT NOT NULL,
    "problem_id" TEXT NOT NULL,
    "source_code" TEXT NOT NULL,
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
    "std_output" TEXT,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Solved_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Solved_solved_by_problem_id_key" ON "Solved"("solved_by", "problem_id");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_title_created_by_key" ON "Playlist"("title", "created_by");

-- CreateIndex
CREATE UNIQUE INDEX "Problem_Lists_playlist_id_problem_id_key" ON "Problem_Lists"("playlist_id", "problem_id");

-- AddForeignKey
ALTER TABLE "Problem" ADD CONSTRAINT "Problem_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem_Lists" ADD CONSTRAINT "Problem_Lists_playlist_id_fkey" FOREIGN KEY ("playlist_id") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem_Lists" ADD CONSTRAINT "Problem_Lists_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
