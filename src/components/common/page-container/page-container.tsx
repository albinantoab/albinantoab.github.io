interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  // Shuffled circles positioned around the edges with varied sizes
  const circles: Circle[] = [
    {
      id: 1,
      x: 8,
      y: 68,
      size: 320,
      color: '#C084FC' // Vibrant pink-purple
    },
    {
      id: 2,
      x: 85,
      y: 15,
      size: 390,
      color: '#3B82F6' // Vibrant blue
    },
    {
      id: 3,
      x: 92,
      y: 80,
      size: 220,
      color: '#1E40AF' // Deep vibrant blue
    },
    {
      id: 4,
      x: 18,
      y: 5,
      size: 300,
      color: '#A855F7' // Intense pink-purple
    },
    {
      id: 5,
      x: 95,
      y: 45,
      size: 460,
      color: '#8B5CF6' // Rich purple
    },
    {
      id: 6,
      x: 12,
      y: 140,
      size: 340,
      color: '#C084FC' // Vibrant pink-purple
    }
  ];

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Background with random circles */}
      <div className="fixed inset-0 w-full h-full">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className={`absolute rounded-full opacity-70 ${
              circle.id > 2 ? 'hidden md:block' : ''
            }`}
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              backgroundColor: circle.color,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Frosted glass overlay */}
      <div 
        className="fixed inset-0 w-full h-full backdrop-blur-xl bg-black/40" 
        style={{
          backdropFilter: 'blur(100px) saturate(150%) contrast(110%)',
          WebkitBackdropFilter: 'blur(100px) saturate(150%) contrast(110%)',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export { PageContainer };