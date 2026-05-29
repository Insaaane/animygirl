import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/Container";

export function Footer() {
  return (
    <footer className="footer">
      <span className="bg-noise" aria-hidden="true" />
      <Container className="footer__inner">
        <span>© 2026 {siteConfig.name}</span>
        <a href={siteConfig.social.telegram} target="_blank" rel="noreferrer">
          {siteConfig.handle}
        </a>
      </Container>
    </footer>
  );
}
