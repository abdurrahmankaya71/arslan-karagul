"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  School,
  User,
  BookOpen,
  Video,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { name: "Anasayfa", href: "/", icon: Home },
    { name: "PAK Özel Eğitim Merkezi", href: "/pak-ozel-egitim", icon: School },
    {
      name: "Süpervizyon ve İntervizyon",
      href: "/supvizyon-intervizyon",
      icon: User,
    },
    { name: "Kimlik", href: "/kimlik", icon: User },
    { name: "Kitaplar", href: "/kitaplar", icon: BookOpen },
    { name: "Mülakatlar", href: "/mulakatlar", icon: Video },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        scrolled
          ? "bg-background/80 border-b border-border/40 shadow-sm"
          : "bg-background/60"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold group"
            >
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded transition-transform group-hover:scale-105">
                Dr.
              </span>
              <span className="text-gradient">Arslan Karagül</span>
            </Link>
          </div>

          {/* Masaüstü Menüsü */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}

            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/5"
              >
                <MoreHorizontal className="h-4 w-4" />
                <span>Diğer</span>
                <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180" />
              </Button>
              <div className="absolute top-full right-0 w-48 py-2 bg-background border border-border/40 rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5"
                >
                  Blog
                </Link>
                <Link
                  href="/galeri"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5"
                >
                  Galeri
                </Link>
                <Link
                  href="/iletisim"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5"
                >
                  İletişim
                </Link>
              </div>
            </div>

            <div className="pl-2 border-l border-border/40 ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Menüyü Aç/Kapat"
              className="focus:ring-1 focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90 backdrop-blur-md border-t border-border/40">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-border/40">
              <Link
                href="/blog"
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/galeri"
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri
              </Link>
              <Link
                href="/iletisim"
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
