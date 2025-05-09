import { getTasks } from '@/lib/tasks';
import Card from '@/components/Card';
import AddTaskButton from '@/components/AddTaskButton';

export default async function Tasks() {
  const tasks = await getTasks();

  const todo = tasks.filter((task) => task.status === 'A fazer');
  const doing = tasks.filter((task) => task.status === 'Em andamento');
  const done = tasks.filter((task) => task.status === 'Completo');

  return (
    <>
      <div className="m-12 flex justify-center gap-10">
        <Card status="A fazer" tasks={todo} />
        <Card status="Em andamento" tasks={doing} />
        <Card status="Completo" tasks={done} />
      </div>
      <AddTaskButton />
    </>
  );
}
