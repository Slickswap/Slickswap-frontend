-- CreateTable
CREATE TABLE `Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `decimals` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `chainId` INTEGER NOT NULL,
    `listed` ENUM('NOT_LISTED', 'DEFAULT_LIST') NOT NULL DEFAULT 'NOT_LISTED',
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Campaign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `address` VARCHAR(191) NOT NULL,
    `chainId` INTEGER NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `banner` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `telegram` VARCHAR(191) NULL,
    `discord` VARCHAR(191) NULL,
    `github` VARCHAR(191) NULL,
    `reddit` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `startDate` INTEGER NULL,
    `dummyRate` VARCHAR(191) NULL,
    `dummyMaxContrib` VARCHAR(191) NULL,
    `dummyHardCap` VARCHAR(191) NULL,
    `dummySoftCap` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kyc` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `address` VARCHAR(191) NOT NULL,
    `chainId` INTEGER NOT NULL,
    `transactionHash` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Kyc_address_key`(`address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `wallet` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'MOD', 'USER') NOT NULL DEFAULT 'USER',
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_wallet_key`(`wallet`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Token` ADD CONSTRAINT `Token_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
