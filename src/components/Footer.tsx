import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer id="contact" className="border-t border-primary/10">
    <div className="container py-16 text-center md:py-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Get in touch</p>
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">Thanks for stopping by.</h2>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">This portfolio is a showcase of my Minecraft development, server infrastructure and community projects.</p>
      <a href="mailto:astrokinglord@proton.me" className="inline-flex items-center gap-3 rounded-xl border border-primary/20 bg-secondary/40 px-6 py-4 font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-primary/10"><Mail className="h-5 w-5" />astrokinglord@proton.me<ArrowUpRight className="h-4 w-4" /></a>
      <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-sm text-muted-foreground"><MessageSquare className="h-4 w-4 text-primary" /><span>Discord: <strong className="font-semibold text-foreground">dev.astrodude.gg</strong></span></div>
      <div className="mt-12 border-t border-primary/10 pt-7"><p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AstroDev. All rights reserved.</p><p className="mt-2 text-xs text-muted-foreground/60">Minecraft is a trademark of Mojang Studios. This portfolio is not affiliated with Mojang or Microsoft.</p></div>
    </div>
  </footer>
);
