/*
  Warnings:

  - Added the required column `created` to the `doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'DOCTOR';

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
