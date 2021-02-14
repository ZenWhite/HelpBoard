import { CommonList } from '../Common/common-list.component'
import { CommonListItem } from '../Common/common-listitem.component'

const tasks = [
  { task: 'askflskdg' },
  { task: 'askflskdg' },
  { task: 'askflskdg' },
  { task: 'askflskdg' }
]

export const TaskList = () => (
  <CommonList>
    {tasks.map((task) => (
      <CommonListItem children={task.task} />
    ))}
  </CommonList>
)
