import { motion } from "framer-motion";

export const LogoGraphic = () => (
  <section className="container overflow-hidden py-16 md:py-24">
    <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative mx-auto flex max-w-5xl items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/60 to-background px-6 py-16 text-center md:py-24">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" /><div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="relative"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">Minecraft • Infrastructure • Development</p><p className="text-5xl font-black tracking-tighter md:text-8xl">ASTRO<span className="text-primary">DEV</span></p><p className="mt-4 text-sm text-muted-foreground md:text-base">Building and supporting Minecraft experiences.</p></div>
    </motion.div>
  </section>
);
