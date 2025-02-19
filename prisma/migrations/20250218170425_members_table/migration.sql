/*
  Warnings:

  - A unique constraint covering the columns `[ein]` on the table `gyms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ssn" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "gym_id" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member_ssn_key" ON "Member"("ssn");

-- CreateIndex
CREATE UNIQUE INDEX "gyms_ein_key" ON "gyms"("ein");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "fk_member_gym" FOREIGN KEY ("gym_id") REFERENCES "gyms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
