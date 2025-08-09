interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  // Fixed circles in top-right and bottom-left areas
  const circles: Circle[] = [
    // Top-right area circles
    {
      id: 1,
      x: 75,
      y: 10,
      size: 400,
      color: '#E9D5FF' // Muted purple
    },
    {
      id: 2,
      x: 85,
      y: 25,
      size: 300,
      color: '#EBF8FF' // Muted blue
    },
    // Bottom-left area circles
    {
      id: 3,
      x: 15,
      y: 75,
      size: 450,
      color: '#BFDBFE' // Muted blue
    },
    {
      id: 4,
      x: 5,
      y: 85,
      size: 350,
      color: '#DDD6FE' // Muted purple
    }
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background with random circles */}
      <div className="fixed inset-0 w-full h-full">
        {circles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full opacity-70"
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
      <div className="fixed inset-0 w-full h-full backdrop-blur-3xl bg-white/20" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-6xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export { PageContainer };