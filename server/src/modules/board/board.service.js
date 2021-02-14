import { database } from '../prisma/prisma.module.js'

const include = {
  lists: {
    include: {
      tasks: true
    }
  }
}

async function readOne(id) {
  return await database.board.findUnique({
    where: { id },
    include
  })
}

async function readAll() {
  return await database.board.findMany({ include })
}

async function createOne(data) {
  return await database.board.create({ data, include })
}

async function updateOne(id, data) {
  return await database.board.update({
    where: { id },
    data,
    include
  })
}

async function deleteOne(id) {
  return await database.board.delete({
    where: { id }
  })
}

export const boardService = {
  readOne,
  readAll,
  createOne,
  updateOne,
  deleteOne
}
