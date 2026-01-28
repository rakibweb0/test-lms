-- CreateTable
CREATE TABLE "Test" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_id_key" ON "Test"("id");
