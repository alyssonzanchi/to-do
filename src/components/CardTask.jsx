import DifficultyIcons from './DifficultyIcons';

export default function CardTask({ title, priority, difficulty }) {
  return (
    <div className="bg-task p-6 rounded-2xl m-6 mt-0">
      <span className="text-xl font-semibold">{title}</span>
      <DifficultyIcons priority={priority} difficulty={difficulty} />
    </div>
  );
}
