import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";

import { cases } from "@/entities/case/model/cases";
import { Container } from "@/shared/ui/Container";
import { MetricCard } from "@/shared/ui/MetricCard";
import { Reveal } from "@/shared/ui/Reveal";
import { SectionHeading } from "@/shared/ui/SectionHeading";

export function CasesSection() {
  const [featured, ...secondary] = cases;

  return (
    <section className="section cases-section" id="cases">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Кейсы"
            title="Контент, который работает на охват, заявки и узнаваемость"
            description="В каждом проекте фокус разный: где-то нужен имидж и охваты, где-то заявки, а где-то аккуратная работа с репутационной темой."
          />
        </Reveal>

        <div className="cases-layout">
          <Reveal className="featured-case">
            <div className="featured-case__copy">
              <p className="case-index">01 / featured</p>
              <h3>{featured.title}</h3>
              <p>{featured.challenge}</p>
              <div className="metric-row">
                {featured.metrics.map((metric) => (
                  <MetricCard key={metric.label} {...metric} />
                ))}
              </div>
              <ul className="check-list">
                {featured.results.map((result) => (
                  <li key={result}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="featured-case__media">
              {featured.images.map((src, index) => (
                <div className="phone-frame" key={src}>
                  <Image
                    src={src}
                    alt={`${featured.shortTitle}: пример Reels ${index + 1}`}
                    fill
                    sizes="(max-width: 900px) 38vw, 180px"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <div className="case-stack">
            {secondary.map((item, index) => (
              <Reveal className={`case-card case-card--${item.tone}`} key={item.slug} delay={index * 0.08}>
                <div>
                  <p className="case-index">0{index + 2}</p>
                  <h3>{item.title}</h3>
                  <p className="case-role">{item.role}</p>
                </div>
                <div className="case-card__body">
                  <div className="case-card__media">
                    {item.images.slice(0, 2).map((src, imageIndex) => (
                      <div className="thumb-frame" key={src}>
                        <Image
                          src={src}
                          alt={`${item.shortTitle}: визуальный пример ${imageIndex + 1}`}
                          fill
                          sizes="110px"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="case-card__metrics">
                    {item.metrics.slice(0, 3).map((metric) => (
                      <span key={metric.label}>
                        <strong>{metric.value}</strong>
                        {metric.label}
                      </span>
                    ))}
                  </div>
                </div>
                {item.teamCredit ? (
                  <p className="team-note">
                    <Sparkles aria-hidden="true" />
                    В агентских кейсах результаты командные.
                  </p>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
