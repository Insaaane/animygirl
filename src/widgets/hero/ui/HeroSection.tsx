import Image from "next/image";
import { ArrowDownRight, PlayCircle } from "lucide-react";

import { ContactActions } from "@/features/contact-links/ui/ContactActions";
import { Container } from "@/shared/ui/Container";
import { MetricCard } from "@/shared/ui/MetricCard";
import { Reveal } from "@/shared/ui/Reveal";
import { TiltCard } from "@/shared/ui/TiltCard";

const heroMetrics = [
  { value: "7+ лет", label: "в создании контента и ведении соцсетей" },
  { value: "3,5 млн", label: "просмотров в командном кейсе" },
  { value: "1 млн", label: "месячные охваты в сильных проектах" }
] as const;

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <span className="bg-noise" aria-hidden="true" />
      <Container className="hero__grid">
        <Reveal className="hero__content">
          <h1>SMM, который соединяет стратегию, продакшен и органический рост</h1>
          <p className="hero__lead">
            Веду проекты от идеи до результата: сценарии, съемки, монтаж, дизайн,
            работа с блогерами и командой продакшена.
          </p>
          <ContactActions />
          <div className="hero__metrics" aria-label="Ключевые показатели">
            {heroMetrics.map((metric) => (
              <MetricCard key={metric.value} {...metric} />
            ))}
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={0.12}>
          <TiltCard className="hero-photo" aria-label="Портрет Алины Насретдиновой">
            <Image
              src="/media/photos/portrait.png"
              alt="Алина Насретдинова, SMM-специалист"
              fill
              preload
              fetchPriority="high"
              loading="eager"
              sizes="(max-width: 900px) 82vw, 430px"
            />
          </TiltCard>
          <div className="hero-proof" aria-label="Форматы работы">
            <PlayCircle aria-hidden="true" />
            <span>Reels / UGC / блогеры / продакшен</span>
          </div>
        </Reveal>
      </Container>

      <Container className="hero__preview" aria-label="Переход к кейсам">
        <span>Дальше: кейсы с цифрами</span>
        <ArrowDownRight aria-hidden="true" />
        <strong>ДАРК</strong>
        <strong>Electrolog</strong>
        <strong>Личный бренд</strong>
      </Container>
    </section>
  );
}
