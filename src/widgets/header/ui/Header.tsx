import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/Container";
import { ContactActions } from "@/features/contact-links/ui/ContactActions";

export function Header() {
  return (
    <header className="site-header" aria-label="Главная навигация">
      <Container className="site-header__inner">
        <a className="brand" href="#top" aria-label="На первый экран">
          <span className="brand__mark">A</span>
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
        <ContactActions compact />
      </Container>
    </header>
  );
}
