-- CreateTable
CREATE TABLE "gyms" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "ein" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gyms_pkey" PRIMARY KEY ("id")
);
