import package_prisma from '@prisma/client'
const { PrismaClient } = package_prisma

export const database = new PrismaClient()
