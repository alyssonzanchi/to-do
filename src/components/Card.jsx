import { ListTodo, Clock, Check } from 'lucide-react';
import CardTask from '@/components/CardTask';

const statusIcons = {
  'A fazer': <ListTodo />,
  'Em andamento': <Clock />,
  'Completo': <Check />
};

export default async function Card({ status, tasks }) {
  const icon = statusIcons[status];

  return (
    <div className="bg-card rounded-3xl p-6 w-[560px]">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-background">{icon}</span>
        <h2 className="text-2xl font-semibold text-background">{status}</h2>
      </div>
      <div>
        {tasks.map((task, index) => (
          <CardTask
            key={index}
            title={task.title}
            priority={task.priority}
            difficulty={task.difficulty}
          />
        ))}
      </div>
    </div>
  );
}
