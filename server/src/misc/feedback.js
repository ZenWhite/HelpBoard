const empty = (entity) => `there is no ${entity}`

const notCreated = (entity) => `cannot create ${entity}`

const notUpdated = (entity) => `cannot update ${entity}`

const notDeleted = (entity) => `cannot delete ${entity}`

const feedback = {
  empty,
  notCreated,
  notUpdated,
  notDeleted
}

export default feedback
