import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => (
  <div className="flex min-h-screen flex-col"><Header /><main className="flex-grow">
    <section className="container py-20 md:py-32"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto mb-14 max-w-3xl text-center">
      <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Contact</span><h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">Find me <span className="text-primary">online.</span></h1><p className="text-lg text-muted-foreground">For questions about my work or projects, you can reach me through the contact details below.</p>
    </motion.div>
    <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
      <Card className="border border-primary/20 bg-secondary/50"><CardContent className="p-7"><Mail className="mb-5 h-7 w-7 text-primary" /><h2 className="mb-2 text-xl font-bold">Email</h2><p className="mb-4 text-sm text-muted-foreground">The best way to reach me directly.</p><a href="mailto:astrokinglord@proton.me" className="break-all font-semibold text-primary hover:underline">astrokinglord@proton.me</a></CardContent></Card>
      <Card className="border border-primary/20 bg-secondary/50"><CardContent className="p-7"><MessageSquare className="mb-5 h-7 w-7 text-primary" /><h2 className="mb-2 text-xl font-bold">Discord</h2><p className="mb-4 text-sm text-muted-foreground">Find me on Discord.</p><p className="font-semibold text-primary">dev.astrodude.gg</p><p className="mt-2 text-xs text-muted-foreground">Username / contact: use Discord search.</p></CardContent></Card>
    </div></section>
  </main><Footer /></div>
);
export default Contact;
