import Image from 'next/image';

const colorIcons = {
  Baixa: '/icons/corner-blue.png',
  Média: '/icons/corner-yellow.png',
  Alta: '/icons/corner-red.png'
};

export default function DifficultyIcons({ priority, difficulty }) {
  const priorityMap = {
    Baixa: 1,
    Média: 2,
    Alta: 3
  };

  const activeCount = priorityMap[priority] || 0;
  const activeIcon = colorIcons[difficulty] || '/icons/corner-default.png';

  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((index) => (
        <Image
          key={index}
          src={index < activeCount ? activeIcon : '/icons/corner-default.png'}
          alt="Task icon"
          width={16}
          height={16}
        />
      ))}
    </div>
  );
}
