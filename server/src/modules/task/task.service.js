import { database } from '../prisma/prisma.module.js'

async function readOne(id) {
  return await database.task.findUnique({
    where: { id }
  })
}

async function readAll() {
  return await database.task.findMany()
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
  const task = await readOne(id)

  return task
    ? await database.task.delete({
        where: { id }
      })
    : null
}

export const taskService = {
  readOne,
  readAll,
  createOne,
  updateOne,
  deleteOne
}
