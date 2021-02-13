import { database } from '../prisma/prisma.module.js'

async function readOne(id) {
  return await database.card.findUnique({
    where: { id }
  })
}

async function createOne(data) {
  return await database.card.create({ data })
}

async function updateOne(id, data) {
  return await database.card.update({
    where: { id },
    data
  })
}

async function deleteOne(id) {
  return await database.card.delete({
    where: { id }
  })
}

async function readAll() {
  try {
    return await database.card.findMany()
  } catch (error) {
    throw error
  }
}

export const cardService = {
  readOne,
  readAll,
  createOne,
  updateOne,
  deleteOne
}
