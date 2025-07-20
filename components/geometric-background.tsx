interface GeometricBackgroundProps {
  className?: string;
  opacity?: string;
}

export default function GeometricBackground({ 
  className = "absolute inset-0 pointer-events-none",
  opacity = "opacity-20 dark:opacity-15"
}: GeometricBackgroundProps) {
  return (
    <div className={className}>
      <svg 
        className={`absolute inset-0 w-full h-full ${opacity}`}
        viewBox="0 0 800 600" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <style>
            {`
              @keyframes float {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                50% { transform: translateY(-20px) translateX(12px); }
              }
              @keyframes drift {
                0%, 100% { transform: translateX(0px) translateY(0px); }
                50% { transform: translateX(18px) translateY(-15px); }
              }
              @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
              }
              @keyframes wave {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-18px); }
              }
              @keyframes rotate {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(15deg); }
              }
              @keyframes spiral {
                0% { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.2); }
                100% { transform: rotate(360deg) scale(1); }
              }
              @keyframes oscillate {
                0%, 100% { transform: translateX(0px) scaleY(1); }
                25% { transform: translateX(15px) scaleY(1.3); }
                75% { transform: translateX(-15px) scaleY(0.7); }
              }
              @keyframes morph {
                0%, 100% { transform: scale(1) rotate(0deg); }
                33% { transform: scale(1.4, 0.6) rotate(120deg); }
                66% { transform: scale(0.8, 1.6) rotate(240deg); }
              }
              @keyframes verticalFlow {
                0%, 100% { transform: translateY(0px) translateX(0px); }
                50% { transform: translateY(-30px) translateX(8px); }
              }
              @keyframes fastSpin {
                0% { transform: rotate(0deg) scale(1); }
                100% { transform: rotate(360deg) scale(1.1); }
              }
              @keyframes elasticBounce {
                0%, 100% { transform: scaleY(1) scaleX(1); }
                25% { transform: scaleY(1.3) scaleX(0.7); }
                75% { transform: scaleY(0.7) scaleX(1.3); }
              }
              @keyframes irregularPath {
                0% { transform: translate(0px, 0px) rotate(0deg); }
                25% { transform: translate(20px, -15px) rotate(90deg); }
                50% { transform: translate(-10px, -25px) rotate(180deg); }
                75% { transform: translate(-20px, 10px) rotate(270deg); }
                100% { transform: translate(0px, 0px) rotate(360deg); }
              }
              .float { animation: float 6s ease-in-out infinite; }
              .drift { animation: drift 8s ease-in-out infinite; }
              .pulse { animation: pulse 4s ease-in-out infinite; }
              .wave { animation: wave 7s ease-in-out infinite; }
              .rotate { animation: rotate 10s ease-in-out infinite; }
              .spiral { animation: spiral 12s linear infinite; }
              .oscillate { animation: oscillate 5s ease-in-out infinite; }
              .morph { animation: morph 9s ease-in-out infinite; }
              .verticalFlow { animation: verticalFlow 11s ease-in-out infinite; }
              .fastSpin { animation: fastSpin 3s linear infinite; }
              .elasticBounce { animation: elasticBounce 6s ease-in-out infinite; }
              .irregularPath { animation: irregularPath 14s ease-in-out infinite; }
              .delay-1 { animation-delay: 1s; }
              .delay-2 { animation-delay: 2s; }
              .delay-3 { animation-delay: 3s; }
              .delay-4 { animation-delay: 4s; }
              .delay-5 { animation-delay: 5s; }
            `}
          </style>
        </defs>
        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path 
            d="M 80 0 L 0 0 0 80" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            className="text-neutral-300 dark:text-neutral-600"
          />
        </pattern>
        
        {/* Subtle grid background */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated curved flowing lines */}
        <g className="wave">
          <path 
            d="M 0,300 Q 100,200 200,300 Q 300,400 400,300 Q 500,200 600,300 Q 700,400 800,300" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="wave delay-2">
          <path 
            d="M 0,200 Q 150,350 300,200 Q 450,50 600,200 Q 750,350 900,200" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="wave delay-4">
          <path 
            d="M 100,500 Q 200,400 300,500 Q 400,600 500,500 Q 600,400 700,500 Q 800,600 900,500" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        
        {/* Animated small irregular shapes and curved lines */}
        <g className="float rotate">
          <path 
            d="M 120,180 Q 140,160 160,180 L 150,200 Q 130,190 120,180 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="drift delay-1 rotate delay-2">
          <path 
            d="M 580,140 L 600,130 Q 620,150 600,170 L 580,160 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="pulse delay-2">
          <path 
            d="M 320,120 Q 340,100 360,120 Q 350,140 320,130 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="float delay-3 rotate delay-4">
          <path 
            d="M 180,350 L 200,340 Q 210,360 190,370 L 180,350 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="drift delay-4">
          <path 
            d="M 520,380 Q 540,360 560,380 L 550,400 Q 530,390 520,380 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="pulse">
          <path 
            d="M 280,480 Q 300,460 320,480 L 310,500 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="float delay-1 rotate delay-3">
          <path 
            d="M 680,280 L 700,270 Q 720,290 700,310 Q 680,300 680,280 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        
        {/* Animated small curved lines */}
        <g className="wave delay-1">
          <path 
            d="M 150,250 Q 165,235 180,250 Q 195,265 210,250 Q 225,235 240,250" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.4" 
            className="text-neutral-300 dark:text-neutral-700"
          />
        </g>
        <g className="wave delay-3">
          <path 
            d="M 420,180 Q 440,160 460,180 Q 480,200 500,180" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.4" 
            className="text-neutral-300 dark:text-neutral-700"
          />
        </g>
        <g className="wave">
          <path 
            d="M 250,320 Q 270,300 290,320 Q 310,340 330,320 Q 350,300 370,320" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.4" 
            className="text-neutral-300 dark:text-neutral-700"
          />
        </g>
        <g className="wave delay-2">
          <path 
            d="M 550,220 Q 565,210 580,220 Q 595,230 610,220 Q 625,210 640,220" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.4" 
            className="text-neutral-300 dark:text-neutral-700"
          />
        </g>
        
        {/* Animated small diagonal lines */}
        <g className="drift">
          <line 
            x1="100" 
            y1="120" 
            x2="130" 
            y2="150" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="drift delay-2">
          <line 
            x1="380" 
            y1="240" 
            x2="410" 
            y2="270" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="drift delay-4">
          <line 
            x1="620" 
            y1="380" 
            x2="650" 
            y2="410" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="drift delay-1">
          <line 
            x1="200" 
            y1="450" 
            x2="230" 
            y2="480" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        
        {/* Animated small organic shapes */}
        <g className="pulse delay-1">
          <path 
            d="M 160,300 Q 180,280 200,300 Q 190,320 170,310 Q 150,310 160,300 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="float delay-2">
          <path 
            d="M 480,320 Q 500,300 520,320 L 510,340 Q 490,340 480,320 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="drift delay-3">
          <path 
            d="M 350,200 L 370,190 Q 390,210 370,230 Q 350,220 350,200 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="pulse delay-4">
          <path 
            d="M 120,420 Q 140,400 160,420 Q 150,440 130,430 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>

        {/* Irregular shapes with complex animations */}
        <g className="irregularPath delay-1">
          <path 
            d="M 80,80 Q 120,60 160,80 L 140,120 Q 100,140 60,120 Q 70,100 80,80 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="elasticBounce fastSpin delay-2">
          <path 
            d="M 450,100 L 480,90 Q 510,110 490,140 Q 470,160 440,150 Q 430,130 450,100 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="morph verticalFlow delay-3">
          <path 
            d="M 700,200 Q 730,180 760,200 Q 750,230 720,240 Q 690,230 700,200 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="irregularPath delay-4">
          <path 
            d="M 200,450 L 240,430 Q 280,450 260,490 Q 220,510 180,490 Q 170,470 200,450 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>
        <g className="fastSpin elasticBounce delay-5">
          <path 
            d="M 550,350 Q 580,330 610,350 L 590,380 Q 560,390 530,380 Q 540,365 550,350 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.7" 
            className="text-neutral-400 dark:text-neutral-500"
          />
        </g>

        {/* Additional curved elements with varied speeds */}
        <g className="elasticBounce delay-1">
          <path 
            d="M 300,50 Q 320,30 340,50 Q 360,70 340,90 Q 320,110 300,90 Q 280,70 300,50 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-neutral-300 dark:text-neutral-600"
          />
        </g>
        <g className="irregularPath verticalFlow delay-3">
          <ellipse 
            cx="600" 
            cy="450" 
            rx="20" 
            ry="35" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.4" 
            className="text-neutral-300 dark:text-neutral-700"
          />
        </g>
        <g className="fastSpin delay-2">
          <polygon 
            points="100,550 120,530 140,550 130,570 110,570" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.6" 
            className="text-neutral-400 dark:text-neutral-600"
          />
        </g>
      </svg>
    </div>
  );
}