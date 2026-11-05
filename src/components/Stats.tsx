import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

export const Stats = () => (
  <section className="container py-12 md:py-16">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-secondary/40 p-8 text-center md:p-10">
      <div className="mb-4 flex justify-center"><span className="rounded-full bg-primary/10 p-4 text-primary"><Clock3 className="h-8 w-8" /></span></div>
      <div className="mb-2 text-5xl font-extrabold text-primary md:text-6xl">5+</div>
      <h2 className="mb-2 text-xl font-bold">Years of Minecraft Development</h2>
      <p className="text-muted-foreground">Five years of hands-on experience across server development, infrastructure, hosting and community management.</p>
    </motion.div>
  </section>
);
