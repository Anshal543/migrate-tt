"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  };

  const openDrawer = () => {
    setIsOpen(true);
    gsap.fromTo(
      drawerRef.current,
      { x: "100%", opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  };

  const closeDrawer = () => {
    gsap.to(drawerRef.current, {
      x: "100%",
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setIsOpen(false),
    });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-gradient-to-b from-background/60 to-transparent border-b border-border/10 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          aria-label="Tactech"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent  font-kinder text-3xl">
              Tactech
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              whileHover={{ scale: 1.08, color: "#3B82F6" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </motion.button>
          ))}
          <ThemeToggle />
          <Button className="rounded-full bg-gradient-to-r from-primary to-blue-500 text-white hover:opacity-90">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={openDrawer}
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Animated GSAP Drawer */}
      {isOpen && (
        <div
          ref={drawerRef}
          className="fixed top-0 right-0 z-[150] h-full w-4/5 sm:w-2/5 bg-background/80 backdrop-blur-lg border-l border-border shadow-2xl p-6 flex flex-col space-y-6 rounded-l-2xl"
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeDrawer}
              aria-label="Close Menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ x: 5, color: "#3B82F6" }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.05 * index,
                }}
                className={cn(
                  "text-left text-base font-medium hover:text-primary transition-colors",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </motion.button>
            ))}
            <Button className="mt-6 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  );
}
