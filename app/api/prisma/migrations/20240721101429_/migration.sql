/*
  Warnings:

  - You are about to drop the column `doctorPassword` on the `doctor` table. All the data in the column will be lost.
  - Added the required column `doctor_password` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" DROP COLUMN "doctorPassword",
ADD COLUMN     "doctor_password" TEXT NOT NULL;
