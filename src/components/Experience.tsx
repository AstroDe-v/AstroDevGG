import { Code2, Server, Network, Cloud, Bot, Globe, Settings, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  { icon: <Settings className="h-7 w-7 text-primary" />, title: "Minecraft Server Development", description: "Configuring and developing Minecraft server experiences, gameplay systems, plugins and server environments." },
  { icon: <Server className="h-7 w-7 text-primary" />, title: "Pterodactyl Infrastructure", description: "Setting up and managing Pterodactyl panels, nodes, server deployments and hosting environments." },
  { icon: <Network className="h-7 w-7 text-primary" />, title: "Velocity Networks", description: "Working with Velocity proxy networks and connected Minecraft server infrastructure." },
  { icon: <Cloud className="h-7 w-7 text-primary" />, title: "Cloudflare & Networking", description: "Using Cloudflare and networking tools to support domains, traffic routing and server connectivity." },
  { icon: <Bot className="h-7 w-7 text-primary" />, title: "Discord Bot Development", description: "Building and configuring Discord bots and tools to support server communities and workflows." },
  { icon: <Code2 className="h-7 w-7 text-primary" />, title: "Web Technologies", description: "Working with HTML, CSS and JavaScript to create and customize web experiences." },
];
const technologies = ["Minecraft", "Pterodactyl", "Velocity", "Cloudflare", "Discord", "HTML", "CSS", "JavaScript"];

export const Experience = () => (
  <section id="experience" className="container py-20 md:py-24">
    <div className="mb-14 text-center"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Skills &amp; Technologies</span>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">What I <span className="text-primary">Work With</span></h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">A practical mix of Minecraft development, hosting infrastructure, networking and community-focused tools.</p>
    </motion.div></div>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => <motion.div key={skill.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
        <Card className="group h-full border border-primary/20 bg-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"><CardHeader className="text-center"><div className="mb-3 mx-auto w-fit rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">{skill.icon}</div><CardTitle className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">{skill.title}</CardTitle><CardDescription className="leading-relaxed">{skill.description}</CardDescription></CardHeader></Card>
      </motion.div>)}
    </div>
    <div className="mx-auto mt-12 max-w-4xl text-center"><h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Technology stack</h3><div className="flex flex-wrap justify-center gap-3">{technologies.map((technology) => <span key={technology} className="rounded-full border border-primary/20 bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground">{technology}</span>)}</div></div>
  </section>
);
