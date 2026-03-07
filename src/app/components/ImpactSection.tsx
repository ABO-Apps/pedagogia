import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

function AnimatedStat({ value, label, delay }: StatProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    if (value === "∞") {
      setTimeout(() => setDisplayValue("∞"), delay * 1000);
      return;
    }

    const numericValue = parseInt(value);
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current).toString() + (value.includes("+") ? "+" : ""));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
        {displayValue}
      </div>
      <div className="text-lg md:text-xl text-gray-400">
        {label}
      </div>
    </motion.div>
  );
}

export function ImpactSection() {
  const stats = [
    {
      value: "100+",
      label: "Episódios inspiradores",
      delay: 0,
    },
    {
      value: "50+",
      label: "Especialistas convidados",
      delay: 0.1,
    },
    {
      value: "1000+",
      label: "Alunos impactados",
      delay: 0.2,
    },
    {
      value: "∞",
      label: "Futuro transformado",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}