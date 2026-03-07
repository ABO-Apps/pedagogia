import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

const episodes = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1648522168698-537da0654bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwb2RjYXN0JTIwc3R1ZGlvJTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NzI5MTU2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    theme: "Educação do Futuro",
    guest: "Dra. Maria Silva",
    duration: "42 min",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1761208662441-9ba3264ca7fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRldmVsb3BtZW50JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MjkxNTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    theme: "Desenvolvimento Infantil",
    guest: "Prof. João Santos",
    duration: "38 min",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1771765812031-22653b4c70a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tJTIwZnV0dXJlfGVufDF8fHx8MTc3MjkxNTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    theme: "Formação Humana",
    guest: "Dra. Ana Costa",
    duration: "45 min",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1758573466942-fbc45731e6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aXZlJTIwdGVhY2hpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjkxNTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    theme: "Inovação Educacional",
    guest: "Prof. Carlos Mendes",
    duration: "51 min",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3Mjg4NDE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    theme: "Aprendizagem Criativa",
    guest: "Dra. Laura Oliveira",
    duration: "36 min",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMGxlYWRlcnNoaXAlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc3MjkxNTYwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    theme: "Liderança Educacional",
    guest: "Prof. Roberto Lima",
    duration: "40 min",
  },
];

export function PodcastSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-sm font-medium">
              Podcast
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Influenciador do Futuro
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Conversas inspiradoras com educadores, especialistas e líderes que acreditam no poder transformador da educação.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {episodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(episode.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className={`relative ${index === 0 ? 'h-[400px] md:h-[500px]' : 'h-[300px]'} overflow-hidden`}>
                <motion.img
                  src={episode.image}
                  alt={episode.theme}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === episode.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Play Button */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                  animate={{
                    scale: hoveredId === episode.id ? 1.1 : 1,
                    backgroundColor: hoveredId === episode.id ? 'rgba(244, 255, 0, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className={`w-5 h-5 ${hoveredId === episode.id ? 'text-black' : 'text-white'}`} fill={hoveredId === episode.id ? 'black' : 'white'} />
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="text-xs font-medium text-gray-300 mb-2 uppercase tracking-wider">
                    {episode.duration}
                  </div>
                  <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>
                    {episode.theme}
                  </h3>
                  <p className={`text-gray-300 ${index === 0 ? 'text-base md:text-lg' : 'text-sm'}`}>
                    Com {episode.guest}
                  </p>
                  
                  {/* Accent bar */}
                  <motion.div
                    className="h-1 bg-[#F4FF00] mt-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredId === episode.id ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Border highlight on hover */}
              <motion.div
                className="absolute inset-0 border-2 rounded-2xl pointer-events-none"
                animate={{
                  borderColor: hoveredId === episode.id ? 'rgba(244, 255, 0, 0.5)' : 'rgba(255, 255, 255, 0)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="group px-6 md:px-8 py-3 md:py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 mx-auto text-sm md:text-base">
            Ver todos os episódios
            <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}