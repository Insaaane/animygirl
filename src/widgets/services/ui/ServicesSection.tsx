import {
  BarChart3,
  Clapperboard,
  Layers3,
  Megaphone,
  PenLine,
  UsersRound,
} from "lucide-react";

import { additionalProjects } from "@/entities/project/model/projects";
import { services } from "@/entities/service/model/services";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { SectionHeading } from "@/shared/ui/SectionHeading";

const icons = [Layers3, PenLine, Megaphone, Clapperboard, UsersRound, BarChart3] as const;

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <span className="bg-noise" aria-hidden="true" />
      <Container>
        <div className="services-grid">
          <Reveal>
            <SectionHeading
              kicker="Что беру на себя"
              title="Не просто публикации, а полный цикл медиа вокруг бренда"
              description="Собираю систему: от идеи и гипотез до съемок, упаковки, блогеров, публикации и отчетности."
            />
          </Reveal>

          <div className="service-list">
            {services.map((service, index) => {
              const Icon = icons[index];
              return (
                <Reveal className="service-item" key={service.title} delay={index * 0.05}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="projects-band">
          <h3>Проекты и ниши, где уже был опыт</h3>
          <ul>
            {additionalProjects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
