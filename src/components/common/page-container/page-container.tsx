interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface CirclePosition {
  x: number;
  y: number;
}

interface PageContainerProps {
  children: React.ReactNode;
  index?: number;
}

const PageContainer = ({ children, index = 0 }: PageContainerProps) => {
  // Base circle configuration (colors and sizes remain constant)
  const baseCircles: Circle[] = [
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

  // Different position configurations for each index
  const positionConfigs: CirclePosition[][] = [
    // Index 0 - Default configuration
    [
      { x: 8, y: 68 },
      { x: 85, y: 15 },
      { x: 92, y: 80 },
      { x: 18, y: 5 },
      { x: 95, y: 45 },
      { x: 12, y: 140 }
    ],
    // Index 1 - Shifted configuration
    [
      { x: 15, y: 25 },
      { x: 75, y: 65 },
      { x: 25, y: 85 },
      { x: 85, y: 25 },
      { x: 5, y: 55 },
      { x: 90, y: 5 }
    ],
    // Index 2 - Alternative configuration
    [
      { x: 90, y: 20 },
      { x: 10, y: 30 },
      { x: 80, y: 70 },
      { x: 20, y: 90 },
      { x: 70, y: 10 },
      { x: 30, y: 60 }
    ],
    // Index 3 - Another variation
    [
      { x: 50, y: 10 },
      { x: 90, y: 40 },
      { x: 60, y: 85 },
      { x: 10, y: 70 },
      { x: 80, y: 25 },
      { x: 40, y: 50 }
    ]
  ];

  // Get current positions based on index, with fallback to default
  const currentPositions = positionConfigs[index] || positionConfigs[0];

  return (
    <div className="scroll-snap-container relative w-screen overflow-x-hidden">
      {/* Background with animated circles */}
      <div className="fixed inset-0 w-full h-full">
        {baseCircles.map((circle, circleIndex) => (
          <div
            key={circle.id}
            className={`absolute rounded-full opacity-70 transition-all duration-1000 ease-in-out ${
              circle.id > 2 ? 'hidden md:block' : ''
            }`}
            style={{
              left: `${currentPositions[circleIndex]?.x || circle.x}%`,
              top: `${currentPositions[circleIndex]?.y || circle.y}%`,
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