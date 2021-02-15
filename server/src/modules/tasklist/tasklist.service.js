import { database } from '../prisma/prisma.module.js'

const include = {
  tasks: true
}

async function readOne(id) {
  return await database.tasklist.findUnique({
    where: { id },
    include
  })
}

async function readAll() {
  return await database.tasklist.findMany({ include })
}

async function createOne(data) {
  return await database.tasklist.create({ data, include })
}

async function updateOne(id, data) {
  return await database.tasklist.update({
    where: { id },
    data,
    include
  })
}

async function deleteOne(id) {
  const tasklist = await readOne(id)

  return tasklist
    ? await database.tasklist.delete({
        where: { id }
      })
    : null
}

export const tasklistService = {
  readOne,
  readAll,
  createOne,
  updateOne,
  deleteOne
}
