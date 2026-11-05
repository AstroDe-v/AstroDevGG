import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Compass, Globe2, Bot, Layers3 } from "lucide-react";

const projects = [
  { title: "Horizon SMP", category: "Minecraft Server Network", description: "A Minecraft SMP project focused on its own multiplayer experience, server configuration, gameplay rules and community environment.", icon: <Compass className="h-10 w-10" />, tags: ["Minecraft", "SMP", "Server Configuration"], accent: "from-violet-500/25 via-purple-500/10 to-transparent" },
  { title: "SMP Connect", category: "Ultimate Hub of SMPs", description: "A project built around the idea of bringing SMP servers and communities together through one central hub.", icon: <Globe2 className="h-10 w-10" />, tags: ["Minecraft", "Community", "Hub"], accent: "from-fuchsia-500/25 via-purple-500/10 to-transparent" },
  { title: "AstroGG", category: "Private Discord Bot", description: "A private bot project developed for dedicated Discord server use and community workflows.", icon: <Bot className="h-10 w-10" />, tags: ["Discord", "Bot", "Private Project"], accent: "from-indigo-500/25 via-violet-500/10 to-transparent" },
];

export const Projects = () => (
  <section id="projects" className="container py-20 md:py-24">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 text-center">
      <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Selected Work</span>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">Projects &amp; <span className="text-primary">Experiments</span></h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">A few projects I've worked on across Minecraft communities and Discord tooling.</p>
    </motion.div>
    <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.1 }}>
        <Card className="group h-full overflow-hidden border border-primary/20 bg-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
          <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} /><div className="relative rounded-2xl border border-primary/30 bg-background/50 p-6 text-primary shadow-xl transition-transform duration-300 group-hover:scale-110">{project.icon}</div><span className="absolute right-4 top-4 text-xs font-bold tracking-widest text-primary/80">0{index + 1}</span></div>
          <div className="space-y-4 p-6"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">{project.category}</p><h3 className="text-2xl font-bold">{project.title}</h3></div><p className="min-h-20 leading-relaxed text-muted-foreground">{project.description}</p><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}</div></div>
        </Card>
      </motion.div>)}
    </div>
    <div className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 rounded-xl border border-primary/15 bg-secondary/30 p-5 text-center text-sm text-muted-foreground"><Layers3 className="h-5 w-5 shrink-0 text-primary" />More project details and links can be added as they become publicly available.</div>
  </section>
);
