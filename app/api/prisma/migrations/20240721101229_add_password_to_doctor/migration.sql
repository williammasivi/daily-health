/*
  Warnings:

  - Added the required column `doctorPassword` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "doctorPassword" TEXT NOT NULL,
ALTER COLUMN "created" SET DEFAULT CURRENT_TIMESTAMP;
