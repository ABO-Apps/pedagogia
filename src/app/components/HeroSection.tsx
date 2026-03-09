import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const webhookUrl = import.meta.env.VITE_GSHEETS_WEBHOOK_URL?.trim();
    const token = import.meta.env.VITE_GSHEETS_TOKEN?.trim();
    const sheetName = import.meta.env.VITE_SHEET_NAME?.trim() || "Leads";

    if (import.meta.env.DEV) {
      const tokenPreview = token ? `${token.slice(0, 8)}...` : "missing";
      console.log("[gsheets] submitting", { webhookUrl, tokenPreview, sheetName });
    }

    if (!webhookUrl || !token) {
      const missingVars = [
        !webhookUrl ? "VITE_GSHEETS_WEBHOOK_URL" : null,
        !token ? "VITE_GSHEETS_TOKEN" : null,
      ]
        .filter(Boolean)
        .join(", ");

      setSubmitError(`Configuracao ausente: ${missingVars}.`);
      return;
    }

    if (token.startsWith("$2") && !/^\$2[aby]\$\d{2}\$/.test(token)) {
      setSubmitError('Token invalido no .env. Escape "$" como "\\$" e reinicie o vite.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Apps Script web app often does not expose CORS headers for frontend reads.
      // Use no-cors + URLSearchParams for a simple form-style POST.
      const payload = new URLSearchParams({
        token,
        sheet_name: sheetName,
        submittedAt: new Date().toISOString(),
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone,
        estado: formData.state,
        cidade: formData.city,
      });
      const payloadString = payload.toString();

      await fetch(`${webhookUrl}?${payloadString}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        // Duplicate params in URL to ensure Apps Script e.parameter is populated.
        body: payloadString,
      });

      setFormData({ name: "", email: "", phone: "", state: "", city: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Falha ao enviar formulario.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="px-5 py-2 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/30 text-[#E91E63] text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Antonio Meneghetti Faculdade
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transforme vidas através da educação
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            O curso de Pedagogia da AMF forma educadores que não apenas ensinam, mas inspiram e transformam gerações.
          </motion.p>
        </div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Comece sua jornada
              </h3>
              <p className="text-gray-400">
                Receba informações completas sobre o curso e descubra como fazer a diferença
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all"
                />
              </div>

              {/* Telefone */}
              <input
                type="tel"
                name="phone"
                placeholder="Telefone com DDD"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all"
              />

              {/* Estado e Cidade */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="state"
                  placeholder="Estado"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#E91E63] focus:ring-2 focus:ring-[#E91E63]/20 outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-8 py-5 bg-gradient-to-r from-[#8B3DAE] to-[#E91E63] text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#E91E63]/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Quero transformar o futuro"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitError && (
                <p className="text-sm text-red-400 text-center">
                  {submitError}
                </p>
              )}

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você concorda em receber informações sobre o curso de Pedagogia
              </p>
            </form>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-16 md:pt-20"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4 anos</div>
            <div className="text-sm text-gray-400">Duração do curso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-400">Aprovação MEC</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">EAD</div>
            <div className="text-sm text-gray-400">Modalidade flexível</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
            <div className="text-sm text-gray-400">Possibilidades</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
