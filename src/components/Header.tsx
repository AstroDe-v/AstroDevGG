import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/contact" },
];
const avatarUrl = "https://media.discordapp.net/attachments/1490719203617935401/1567952174611177553/rn_image_picker_lib_temp_de776e58-0aee-42e7-9194-15d05f7c20d8.jpg?ex=6aee0cc1&is=6aecbb41&hm=7e9db956d1157d4e187246c6ded66edc98d1cc5285425e697a3063beb0b1f358&=&format=webp&width=430&height=640";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/#about" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={avatarUrl} onError={(event) => { event.currentTarget.src = "/astrodev-avatar-fallback.svg"; }} alt="AstroDev" className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/40" />
          <span className="text-lg font-extrabold tracking-tight">Astro<span className="text-primary">Dev</span></span>
        </a>
        <nav className="hidden md:flex"><ul className="flex items-center space-x-8 text-sm font-medium">{navItems.map((item) => <li key={item.name}><a href={item.href} className="text-muted-foreground transition-colors hover:text-primary">{item.name}</a></li>)}</ul></nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Open menu"><Menu className="h-6 w-6" /></button>
      </div>
      {isMenuOpen && <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden">
        <div className="container flex h-16 items-center justify-between"><span className="text-lg font-extrabold">Astro<span className="text-primary">Dev</span></span><button onClick={closeMenu} aria-label="Close menu"><X className="h-6 w-6" /></button></div>
        <nav className="flex h-full -mt-16 flex-col items-center justify-center"><ul className="flex flex-col items-center space-y-8">{navItems.map((item) => <li key={item.name}><a href={item.href} onClick={closeMenu} className="text-2xl font-semibold text-foreground transition-colors hover:text-primary">{item.name}</a></li>)}</ul></nav>
      </div>}
    </header>
  );
};
