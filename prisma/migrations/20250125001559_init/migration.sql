-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "field" TEXT NOT NULL,
    "language" TEXT[],
    "frameworks" TEXT[],
    "library" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadtedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);
