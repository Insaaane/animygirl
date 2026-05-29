import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { ContactActions } from "@/features/contact-links/ui/ContactActions";
import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { TiltCard } from "@/shared/ui/TiltCard";

export function ContactSection() {
  return (
    <section className="contact-section" id="contacts">
      <span className="bg-noise" aria-hidden="true" />
      <Container className="contact-section__inner">
        <Reveal className="contact-section__copy">
          <h2>Обсудим проект?</h2>
          <p>
            Напишите в Telegram или Instagram: разберем задачу, текущие соцсети,
            ресурсы на съемки и формат работы, который даст максимум пользы.
          </p>
          <ContactActions />
        </Reveal>
        <Reveal className="contact-section__visual" delay={0.12}>
          <TiltCard className="contact-photo">
            <Image
              src="/media/photos/portrait.png"
              alt="Портрет Алины Насретдиновой"
              fill
              sizes="260px"
              loading="eager"
            />
          </TiltCard>
          <a
            className="contact-note"
            href={siteConfig.social.telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Написать Алине в Telegram"
          >
            <span>@animygirll</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
