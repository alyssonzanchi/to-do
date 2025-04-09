import DifficultyIcons from './DifficultyIcons';

export default function CardTask({ title, priority, difficulty }) {
  return (
    <div>
      <span>{title}</span>
      <DifficultyIcons priority={priority} difficulty={difficulty} />
    </div>
  );
}
