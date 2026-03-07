import { motion } from "motion/react";
import { BookOpen, Lightbulb, TrendingUp, Sparkles, GraduationCap, Target, Users, Zap, Atom, Beaker, Calculator, Globe, Puzzle, Rocket } from "lucide-react";

const floatingElements = [
  { Icon: BookOpen, x: "10%", y: "20%", delay: 0, duration: 20 },
  { Icon: Lightbulb, x: "80%", y: "15%", delay: 2, duration: 25 },
  { Icon: TrendingUp, x: "15%", y: "60%", delay: 4, duration: 22 },
  { Icon: Sparkles, x: "85%", y: "70%", delay: 1, duration: 24 },
  { Icon: GraduationCap, x: "50%", y: "30%", delay: 3, duration: 26 },
  { Icon: Target, x: "70%", y: "50%", delay: 5, duration: 21 },
  { Icon: Users, x: "25%", y: "80%", delay: 2.5, duration: 23 },
  { Icon: Zap, x: "60%", y: "85%", delay: 4.5, duration: 19 },
  { Icon: Atom, x: "40%", y: "10%", delay: 1.5, duration: 24 },
  { Icon: Beaker, x: "90%", y: "40%", delay: 3.5, duration: 22 },
  { Icon: Calculator, x: "5%", y: "45%", delay: 2, duration: 26 },
  { Icon: Globe, x: "75%", y: "25%", delay: 4, duration: 20 },
  { Icon: Puzzle, x: "30%", y: "65%", delay: 1, duration: 25 },
  { Icon: Rocket, x: "55%", y: "75%", delay: 3, duration: 23 },
];

// Paper plane SVG component
function PaperPlane({ x, y, rotation, delay, scale }: { x: string; y: string; rotation: number; delay: number; scale: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, scale, scale, 0],
        rotate: rotation,
        x: [0, 100, 200],
        y: [0, -50, -100]
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <defs>
          <linearGradient id={`planeGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#E91E63" />
            <stop offset="100%" stopColor="#8B3DAE" />
          </linearGradient>
        </defs>
        <path d="M2 2 L58 30 L30 35 L25 58 L2 2Z" fill={`url(#planeGradient${delay})`} opacity="0.8" />
      </svg>
    </motion.div>
  );
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#0f0520]">
      {/* Paper planes */}
      <PaperPlane x="5%" y="10%" rotation={45} delay={0} scale={1} />
      <PaperPlane x="80%" y="5%" rotation={-30} delay={3} scale={0.8} />
      <PaperPlane x="20%" y="70%" rotation={60} delay={6} scale={1.2} />
      <PaperPlane x="90%" y="60%" rotation={-45} delay={9} scale={0.9} />

      {/* Gradient orbs with neon colors */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-[#8B3DAE]/30 to-[#E91E63]/30 blur-3xl"
        style={{ left: "5%", top: "10%", width: 400, height: 400 }}
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#8B3DAE]/20 blur-3xl"
        style={{ left: "75%", top: "20%", width: 300, height: 300 }}
        animate={{ y: [0, -30, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 40, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full bg-gradient-to-br from-[#E91E63]/25 to-[#00E5FF]/25 blur-3xl"
        style={{ left: "20%", top: "70%", width: 350, height: 350 }}
        animate={{ y: [0, -35, 0], x: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 38, delay: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating doodle icons */}
      {floatingElements.map((element, i) => {
        const Icon = element.Icon;
        return (
          <motion.div
            key={`icon-${i}`}
            className="absolute"
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -40, 0],
              x: [0, 15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 text-purple-300/20 stroke-[1.5]" />
          </motion.div>
        );
      })}

      {/* Network lines with neon glow */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="neonLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#E91E63" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B3DAE" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.line
          x1="10%" y1="20%" x2="50%" y2="30%"
          stroke="url(#neonLineGradient)" strokeWidth="2" filter="url(#glow)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="50%" y1="30%" x2="80%" y2="15%"
          stroke="url(#neonLineGradient)" strokeWidth="2" filter="url(#glow)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="15%" y1="60%" x2="70%" y2="50%"
          stroke="url(#neonLineGradient)" strokeWidth="2" filter="url(#glow)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="25%" y1="80%" x2="60%" y2="85%"
          stroke="url(#neonLineGradient)" strokeWidth="2" filter="url(#glow)"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}