import { describe, expect, it } from "vitest";

import { cases } from "../entities/case/model/cases";
import { pricingPlans } from "../entities/pricing/model/pricing";
import { skillGroups } from "../entities/skill/model/skills";
import { services } from "../entities/service/model/services";
import { siteConfig } from "../shared/config/site";
import { socialIcons } from "../shared/ui/SocialIcons";
import { createJsonLd } from "../shared/lib/seo";

describe("landing content model", () => {
  it("keeps required social contact links exact", () => {
    expect(siteConfig.social.instagram).toBe("https://www.instagram.com/animygirl/");
    expect(siteConfig.social.telegram).toBe("http://t.me/animygirll");
  });

  it("uses real social glyphs instead of replacement lucide icons", () => {
    expect(socialIcons.telegram.label).toBe("Telegram");
    expect(socialIcons.instagram.label).toBe("Instagram");
    expect(socialIcons.telegram.viewBox).toBe("0 0 24 24");
    expect(socialIcons.instagram.viewBox).toBe("0 0 24 24");
    expect(socialIcons.telegram.paths.length).toBeGreaterThan(0);
    expect(socialIcons.instagram.paths.length).toBeGreaterThan(1);
  });

  it("contains the four proof cases with required outcomes", () => {
    expect(cases).toHaveLength(4);

    expect(cases.map((item) => item.slug)).toEqual([
      "dark-lounge",
      "electrolog",
      "pavel-krasnov",
      "asbaster-production"
    ]);

    expect(cases[0].metrics.map((metric) => metric.value)).toContain("x3");
    expect(cases[0].metrics.map((metric) => metric.value)).toContain("100");
    expect(cases[1].metrics.map((metric) => metric.value)).toContain("30-40");
    expect(cases[2].metrics.map((metric) => metric.value)).toContain("15");
    expect(cases[3].metrics.map((metric) => metric.value)).toContain("3,5 млн");
    expect(cases[3].teamCredit).toBe(true);
    expect(cases.every((item) => item.images.length >= 2)).toBe(true);
    expect(
      cases
        .flatMap((item) => [...item.images, item.statsImage].filter(Boolean))
        .every((src) => !src?.includes("/media/presentation/")),
    ).toBe(true);
  });

  it("publishes complete service and pricing information", () => {
    expect(services.map((service) => service.title)).toEqual([
      "Стратегия и контент-система",
      "Сценарии Reels",
      "Съемки и продакшен",
      "Монтаж и дизайн",
      "Блогеры, UGC и интеграции",
      "Аналитика и гипотезы"
    ]);

    expect(pricingPlans.map((plan) => plan.price)).toEqual([
      "от 30 000 ₽/мес",
      "от 60 000 ₽/мес",
      "от 100 000 ₽/мес"
    ]);
  });

  it("groups skills into strategic, production, and growth capabilities", () => {
    expect(skillGroups.map((group) => group.title)).toEqual([
      "Стратегия",
      "Продакшен",
      "Рост"
    ]);
    expect(skillGroups.flatMap((group) => group.items)).toEqual(
      expect.arrayContaining(["SMM", "сценарии Reels", "мобильная съемка", "UGC", "аналитика"]),
    );
  });
});

describe("seo structured data", () => {
  it("describes the specialist, services, offers, and sameAs profiles", () => {
    const graph = createJsonLd();

    expect(graph["@context"]).toBe("https://schema.org");
    expect(graph["@graph"].some((node) => node["@type"] === "Person")).toBe(true);
    expect(graph["@graph"].some((node) => node["@type"] === "ProfessionalService")).toBe(true);
    expect(graph["@graph"].some((node) => node["@type"] === "WebPage")).toBe(true);
    expect(JSON.stringify(graph)).toContain("Алина Насретдинова");
    expect(JSON.stringify(graph)).toContain("SMM");
    expect(JSON.stringify(graph)).toContain(siteConfig.social.instagram);
    expect(JSON.stringify(graph)).toContain(siteConfig.social.telegram);
    expect(JSON.stringify(graph)).toContain("от 100 000 ₽/мес");
  });
});
