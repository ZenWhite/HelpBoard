import { database } from '../prisma/prisma.module.js'

async function readOne(id) {
  return await database.task.findUnique({
    where: { id }
  })
}

async function createOne(data) {
  return await database.task.create({ data })
}

async function updateOne(id, data) {
  return await database.task.update({
    where: { id },
    data
  })
}

async function deleteOne(id) {
  return await database.task.delete({
    where: { id }
  })
}

async function readAll() {
  try {
    return await database.task.findMany()
  } catch (error) {
    throw error
  }
}

export const taskService = {
  readOne,
  readAll,
  createOne,
  updateOne,
  deleteOne
}
