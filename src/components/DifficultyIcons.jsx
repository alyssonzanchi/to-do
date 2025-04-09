import Image from 'next/image';

const colorIcons = {
  Fácil: '/icons/corner-blue.png',
  Médio: '/icons/corner-yellow.png',
  Difícil: '/icons/corner-red.png'
};

export default function DifficultyIcons({ priority = 'Baixa', difficulty = 'Fácil' }) {
  const priorityMap = {
    Baixa: 1,
    Média: 2,
    Alta: 3
  };

  const activeCount = priorityMap[priority] || 0;
  const activeIcon = colorIcons[difficulty] || '/icons/corner-default.png';

  return (
    <div className="flex gap-1 items-center">
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
};
