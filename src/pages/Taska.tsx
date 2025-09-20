import { useAppSelector } from '@/redux/'

export default function Taska() {

  // const {} = useAppSelector((state) => state.todo.tasks)
  const todo = useAppSelector((state) => state.todo.tasks)
  console.log(todo);

  return (
    <div>Taska</div>
  )
}
