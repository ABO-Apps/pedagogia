import { motion } from "motion/react";
import { Youtube, Music, Instagram, Podcast } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Music, label: "Spotify", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Podcast, label: "Podcast", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 text-white py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              Pedagogia AMF
            </h3>
            <p className="text-gray-400 text-sm">
              Antonio Meneghetti Faculdade
            </p>
          </motion.div>

          {/* Podcast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base md:text-lg font-semibold mb-4 text-white">Influenciador do Futuro</h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="p-2 bg-white/5 rounded-lg hover:bg-[#F4FF00] hover:text-black transition-all group"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-gray-300 italic">
              "Educar é transformar o mundo."
            </p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-6 md:pt-8 border-t border-white/10 text-xs md:text-sm text-gray-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>© 2026 Antonio Meneghetti Faculdade. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}