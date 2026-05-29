"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ContactActions } from "@/features/contact-links/ui/ContactActions";
import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return undefined;
    }

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
    };

    syncHeaderHeight();

    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    window.addEventListener("resize", syncHeaderHeight, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, []);

  return (
    <header className="site-header" aria-label="Главная навигация" ref={headerRef}>
      <span className="bg-noise" aria-hidden="true" />
      <Container className="site-header__inner">
        <a className="brand" href="#top" aria-label="На первый экран" onClick={closeMenu}>
          <span className="brand__mark">
            <img src="/icon.svg" alt="" aria-hidden="true" />
          </span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.handle}</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="Разделы сайта">
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <ContactActions compact />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            className="mobile-menu"
            id="mobile-menu"
            aria-label="Мобильное меню"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="mobile-menu__inner">
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
