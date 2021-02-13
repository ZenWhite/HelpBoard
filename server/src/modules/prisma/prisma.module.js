import package_prisma from '@prisma/client'
const { PrismaClient } = package_prisma

const prisma = new PrismaClient()

async function main() {
  const cards = await prisma.cardItem.findMany()

  console.log(cards)
}

main()
  .catch((error) => {
    throw error
  })
  .finally(async () => {
    await prisma.$disconnect
  })
