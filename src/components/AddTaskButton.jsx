'use client';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AddTaskButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/tasks/new');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors cursor-pointer"
      aria-label="Adicionar nova tarefa"
    >
      <Plus size={24} />
    </button>
  );
}
