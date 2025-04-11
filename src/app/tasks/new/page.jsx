'use client';

import { createTask } from '@/lib/tasks';

export default function NewTask() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        action={createTask}
        className="bg-card p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-background">
          Nova Tarefa
        </h2>
        <div className="flex items-center gap-2">
          <label className="block text-lg font-medium mb-1">Título:</label>
          <input
            type="text"
            name="title"
            className="w-full bg-white border rounded px-3 py-2 outline-none"
            placeholder="Digite o título da tarefa"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Dificuldade</label>
          <div className="flex gap-4">
            {['Baixa', 'Média', 'Alta'].map((level) => (
              <label key={level} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={level}
                  name="difficulty"
                  defaultChecked={level === 'Média'}
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Prioridade</label>
          <div className="flex gap-4">
            {['Baixa', 'Média', 'Alta'].map((level) => (
              <label key={level} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={level}
                  name="priority"
                  defaultChecked={level === 'Média'}
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-background text-white py-2 rounded hover:bg-indigo-950 transition cursor-pointer"
        >
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
}
