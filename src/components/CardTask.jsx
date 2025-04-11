'use client';
import { ArrowLeft, ArrowRight, Trash2 } from 'lucide-react';
import DifficultyIcons from './DifficultyIcons';
import { deleteTask, editTask } from '@/lib/tasks';

export default function CardTask({ title, priority, difficulty, status, id }) {
  const leftClick = async () => {
    if (status === 'Completo') {
      await editTask(id, { status: 'Em andamento' });
    } else {
      await editTask(id, { status: 'A fazer' });
    }
  };

  const rightClick = async () => {
    if (status === 'A fazer') {
      await editTask(id, { status: 'Em andamento' });
    } else {
      await editTask(id, { status: 'Completo' });
    }
  };

  const deleteBtn = async () => {
    await deleteTask(id);
  };

  const isFirst = status === 'A fazer';
  const isLast = status === 'Completo';

  return (
    <div className="bg-task p-6 rounded-2xl m-6 mt-0">
      <span className="text-xl font-semibold">{title}</span>
      <div className="flex justify-between items-center mt-2.5">
        <DifficultyIcons priority={priority} difficulty={difficulty} />
        <div>
          <button
            className={`cursor-pointer ${isFirst ? 'opacity-40 cursor-not-allowed' : ''}`}
            onClick={leftClick}
            disabled={isFirst}
          >
            <ArrowLeft />
          </button>
          <button
            className={`cursor-pointer ml-3 ${isLast ? 'opacity-40 cursor-not-allowed' : ''}`}
            onClick={rightClick}
            disabled={isLast}
          >
            <ArrowRight />
          </button>
          <button className="cursor-pointer ml-3" onClick={deleteBtn}>
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}
