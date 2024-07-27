/*
  Warnings:

  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `user_description` on the `user` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'DOCTOR';

-- AlterTable
ALTER TABLE "user" DROP COLUMN "role",
DROP COLUMN "updated",
DROP COLUMN "user_description";

-- CreateTable
CREATE TABLE "doctor" (
    "doctor_id" TEXT NOT NULL,
    "doctor_name" TEXT NOT NULL,
    "doctor_email" TEXT NOT NULL,
    "doctor_description" TEXT NOT NULL,
    "doctor_phone_number" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("doctor_id")
);

-- CreateTable
CREATE TABLE "horaire" (
    "horaire_id" TEXT NOT NULL,
    "horaire_title" TEXT NOT NULL,
    "horaire_description" TEXT NOT NULL,
    "repetition_jour" INTEGER NOT NULL,
    "heures" TEXT NOT NULL,

    CONSTRAINT "horaire_pkey" PRIMARY KEY ("horaire_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctor_doctor_id_key" ON "doctor"("doctor_id");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_doctor_email_key" ON "doctor"("doctor_email");

-- CreateIndex
CREATE UNIQUE INDEX "horaire_horaire_id_key" ON "horaire"("horaire_id");
