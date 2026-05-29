import { Check } from "lucide-react";
import type { CSSProperties } from "react";

import { pricingPlans } from "@/entities/pricing/model/pricing";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { SectionHeading } from "@/shared/ui/SectionHeading";

export function PricingSection() {
  return (
    <section className="section pricing-section" id="pricing">
      <span className="bg-noise" aria-hidden="true" />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Форматы работы"
            title="Прайс зависит от глубины вовлечения и состава команды"
            description="Итоговая стоимость обсуждается после разбора проекта, целей и текущих ресурсов."
            align="center"
          />
        </Reveal>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <Reveal
              className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
              key={plan.title}
              delay={index * 0.08}
            >
              <span className="pricing-card__index" style={{ "--price-index": index } as CSSProperties}>
                0{index + 1}
              </span>
              <div>
                <h3>{plan.title}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.subtitle}</p>
              </div>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
