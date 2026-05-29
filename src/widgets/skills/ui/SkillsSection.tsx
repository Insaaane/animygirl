import { Compass, TrendingUp, Video } from "lucide-react";
import type { CSSProperties } from "react";

import { skillGroups } from "@/entities/skill/model/skills";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { SectionHeading } from "@/shared/ui/SectionHeading";

const skillIcons = [Compass, Video, TrendingUp] as const;

export function SkillsSection() {
  return (
    <section className="section skills-section" id="skills">
      <span className="bg-noise" aria-hidden="true" />
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Навыки"
            title="SMM, продакшен и рост в одной рабочей системе"
            description="Стратегия, съемки, монтаж, дизайн, блогеры и аналитика собираются в процесс, где контент работает на охваты, заявки и доверие."
            align="center"
          />
        </Reveal>

        <Reveal className="skills-board" delay={0.08}>
          <div className="skills-board__map" aria-label="Ключевые навыки">
            {skillGroups.map((group, index) => {
              const Icon = skillIcons[index];
              return (
                <article
                  className="skill-group"
                  key={group.title}
                  style={{ "--skill-index": index } as CSSProperties}
                >
                  <div className="skill-group__top">
                    <span>0{index + 1}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
