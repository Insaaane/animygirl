"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { cases } from "@/entities/case/model/cases";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { SectionHeading } from "@/shared/ui/SectionHeading";

export function CasesSection() {
  const [activeSlug, setActiveSlug] = useState(cases[0].slug);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const caseStageRef = useRef<HTMLDivElement>(null);
  const caseSwitcherRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const activeCase = cases.find((item) => item.slug === activeSlug) ?? cases[0];
  const activeIndex = Math.max(
    0,
    cases.findIndex((item) => item.slug === activeCase.slug),
  );
  const mediaItems = useMemo(
    () => [
      ...activeCase.images.map((src, index) => ({
        src,
        label: `Материал ${index + 1}`,
        alt: `${activeCase.shortTitle}: пример контента ${index + 1}`,
      })),
      ...(activeCase.statsImage
        ? [
            {
              src: activeCase.statsImage,
              label: "Скрин результата",
              alt: `${activeCase.shortTitle}: скрин результата из аналитики`,
            },
          ]
        : []),
    ],
    [activeCase],
  );
  const activeMedia = mediaItems[Math.min(activeMediaIndex, mediaItems.length - 1)] ?? mediaItems[0];

  useEffect(() => {
    if (reduceMotion || mediaItems.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveMediaIndex((index) => (index + 1) % mediaItems.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [activeMediaIndex, activeSlug, mediaItems.length, reduceMotion]);

  const handleCaseSelect = (slug: string) => {
    setActiveSlug(slug);
    setActiveMediaIndex(0);

    if (typeof window === "undefined") {
      return;
    }

    window.requestAnimationFrame(() => {
      const stage = caseStageRef.current;
      if (!stage) {
        return;
      }

      const rootStyles = window.getComputedStyle(document.documentElement);
      const headerHeight = Number.parseFloat(rootStyles.getPropertyValue("--header-height")) || 0;
      const hasStackedSwitcher = window.matchMedia("(max-width: 1200px)").matches;
      const switcherHeight = hasStackedSwitcher
        ? (caseSwitcherRef.current?.getBoundingClientRect().height ?? 0)
        : 0;
      const targetTop = stage.getBoundingClientRect().top + window.scrollY - headerHeight - switcherHeight;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: reduceMotion ? "auto" : "smooth",
      });
    });
  };

  return (
    <section className="section cases-section" id="cases">
      <span className="bg-noise" aria-hidden="true" />
      <Container className="cases-container">
        <Reveal>
          <SectionHeading
            kicker="Кейсы"
            title="Контент, который приводит охваты, заявки и доверие"
            description="Проекты в разных нишах: от игровых пространств и студий красоты до личных брендов и агентского продакшена. В каждом кейсе — стратегия, съемки, сценарии, визуал и измеримый результат."
          />
        </Reveal>

        <div className="case-showcase">
          <div className="case-switcher" ref={caseSwitcherRef}>
            {cases.map((item, index) => (
              <button
                className={`case-switcher__item ${item.slug === activeCase.slug ? "case-switcher__item--active" : ""}`}
                type="button"
                key={item.slug}
                onClick={() => handleCaseSelect(item.slug)}
                aria-pressed={item.slug === activeCase.slug}
              >
                <span>0{index + 1}</span>
                <strong>{item.shortTitle}</strong>
                <small>{item.role}</small>
              </button>
            ))}
          </div>

          <div className="case-stage" ref={caseStageRef}>
            <AnimatePresence mode="wait">
              <motion.article
                className={`case-detail case-detail--${activeCase.tone}`}
                key={activeCase.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.975 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -18, scale: 0.985 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="case-detail__copy">
                  <p className="case-index">0{activeIndex + 1} / selected case</p>
                  <h3>{activeCase.title}</h3>
                  <p className="case-role">{activeCase.role}</p>
                  <p className="case-challenge">{activeCase.challenge}</p>

                  <div className="case-detail__metrics" aria-label="Результаты кейса">
                    {activeCase.metrics.map((metric) => (
                      <div className="case-detail__metric" key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="case-detail__lists">
                    <div>
                      <h4>Что сделала</h4>
                      <ul>
                        {activeCase.work.map((item) => (
                          <li key={item}>
                            <CheckCircle2 aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Результат</h4>
                      <ul>
                        {activeCase.results.map((item) => (
                          <li key={item}>
                            <CheckCircle2 aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {activeCase.teamCredit ? (
                    <p className="team-note team-note--large">
                      <Sparkles aria-hidden="true" />
                      В агентских кейсах результаты командные: я отвечала за сценарную часть.
                    </p>
                  ) : null}
                </div>

                <div className="case-detail__media" aria-live="polite">
                  <motion.div
                    className="case-visual-focus"
                    key={activeMedia?.src}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
                    animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {activeMedia ? (
                      <Image
                        src={activeMedia.src}
                        alt={activeMedia.alt}
                        fill
                        sizes="(max-width: 900px) 92vw, 560px"
                        priority={activeIndex === 0 && activeMediaIndex === 0}
                      />
                    ) : null}
                    <span>{activeMedia?.label}</span>
                    {!reduceMotion && mediaItems.length > 1 ? (
                      <i className="case-gallery-progress" key={activeMedia?.src} aria-hidden="true" />
                    ) : null}
                  </motion.div>

                  <div className="case-media-strip" aria-label="Материалы кейса">
                    {mediaItems.map((item, index) => (
                      <button
                        className={`case-media-thumb ${index === activeMediaIndex ? "case-media-thumb--active" : ""}`}
                        type="button"
                        key={item.src}
                        onClick={() => setActiveMediaIndex(index)}
                        aria-pressed={index === activeMediaIndex}
                        aria-label={`${activeCase.shortTitle}: ${item.label}`}
                      >
                        <Image src={item.src} alt="" fill sizes="120px" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
