import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Code2 } from "lucide-react";

const avatarUrl = "https://media.discordapp.net/attachments/1490719203617935401/1567952174611177553/rn_image_picker_lib_temp_de776e58-0aee-42e7-9194-15d05f7c20d8.jpg?ex=6aee0cc1&is=6aecbb41&hm=7e9db956d1157d4e187246c6ded66edc98d1cc5285425e697a3063beb0b1f358&=&format=webp&width=430&height=640";

export const Hero = () => (
  <section id="about" className="container relative flex flex-col items-center overflow-hidden py-20 text-center md:py-32">
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
    </div>
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 flex flex-col items-center">
      <div className="relative mb-8">
        <img src={avatarUrl} onError={(event) => { event.currentTarget.src = "/astrodev-avatar-fallback.svg"; }} alt="AstroDev profile" className="h-40 w-40 rounded-full bg-secondary object-cover object-center shadow-2xl ring-4 ring-primary/50" />
        <div className="absolute -inset-3 -z-10 rounded-full bg-primary/20 blur-2xl" />
        <span className="absolute -bottom-2 -right-2 rounded-full border-4 border-background bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">AD</span>
      </div>
      <span className="mb-5 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Minecraft • Configuration • Infrastructure</span>
      <p className="mb-3 text-lg text-muted-foreground">{`Hi, I'm`}</p>
      <h1 className="mb-5 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">AstroDev</h1>
      <h2 className="mb-6 text-xl font-semibold text-primary md:text-2xl">Minecraft Developer &amp; Config Editor</h2>
      <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Minecraft developer with 5 years of experience in server development, infrastructure, hosting and community management. I work on building, configuring and maintaining Minecraft experiences and the systems behind them.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#projects"><Button size="lg" className="group">Explore my projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Button></a>
        <a href="#experience"><Button size="lg" variant="outline">What I work with <ArrowDown className="ml-2 h-4 w-4" /></Button></a>
      </div>
      <div className="mt-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"><Code2 className="h-4 w-4 text-primary" /> Personal portfolio</div>
    </motion.div>
  </section>
);
