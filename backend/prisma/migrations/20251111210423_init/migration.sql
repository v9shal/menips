-- CreateEnum
CREATE TYPE "PingStatus" AS ENUM ('UP', 'DOWN', 'TIMEOUT');

CREATE EXTENSION IF NOT EXISTS timescaledb;

-- CreateEnum
CREATE TYPE "AlertStatus" AS ENUM ('TRIGGERED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('EMAIL', 'WEBHOOK');




-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endpoint" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" VARCHAR(2048) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "checkIntervalSec" INTEGER NOT NULL DEFAULT 60,
    "consecutiveFails" INTEGER NOT NULL DEFAULT 0,
    "alertOnConsecutiveFails" INTEGER NOT NULL DEFAULT 3,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Endpoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EndpointMetric" (
    "timestamp" TIMESTAMPTZ(3) NOT NULL,
    "responseTimeMs" INTEGER NOT NULL,
    "statusCode" INTEGER NOT NULL,
    "status" "PingStatus" NOT NULL,
    "endpointId" INTEGER NOT NULL,

    CONSTRAINT "EndpointMetric_pkey" PRIMARY KEY ("timestamp","endpointId")
);

-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "status" "AlertStatus" NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "endpointId" INTEGER NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationChannel" (
    "id" SERIAL NOT NULL,
    "type" "NotificationType" NOT NULL,
    "target" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "NotificationChannel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "Endpoint_userId_idx" ON "Endpoint"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Endpoint_userId_url_key" ON "Endpoint"("userId", "url");

-- CreateIndex
CREATE INDEX "EndpointMetric_endpointId_timestamp_idx" ON "EndpointMetric"("endpointId", "timestamp" DESC);

-- CreateIndex
CREATE INDEX "Alert_endpointId_status_idx" ON "Alert"("endpointId", "status");

-- AddForeignKey
ALTER TABLE "Endpoint" ADD CONSTRAINT "Endpoint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EndpointMetric" ADD CONSTRAINT "EndpointMetric_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "Endpoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alert" ADD CONSTRAINT "Alert_endpointId_fkey" FOREIGN KEY ("endpointId") REFERENCES "Endpoint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationChannel" ADD CONSTRAINT "NotificationChannel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

SELECT create_hypertable('"EndpointMetric"', 'timestamp');