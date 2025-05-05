-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('admin', 'user');

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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
