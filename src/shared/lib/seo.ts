import { cases } from "@/entities/case/model/cases";
import { pricingPlans } from "@/entities/pricing/model/pricing";
import { services } from "@/entities/service/model/services";
import { siteConfig } from "@/shared/config/site";

type JsonLdNode = Record<string, unknown> & {
  "@id": string;
  "@type": string | string[];
};

export type JsonLdGraph = {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createJsonLd(): JsonLdGraph {
  const personId = absoluteUrl("#person");
  const serviceId = absoluteUrl("#service");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": personId,
        "@type": "Person",
        name: siteConfig.name,
        alternateName: siteConfig.handle,
        jobTitle: "SMM-специалист и digital-маркетолог",
        url: absoluteUrl(),
        image: absoluteUrl("/media/photos/portrait.png"),
        sameAs: [siteConfig.social.instagram, siteConfig.social.telegram],
        knowsAbout: services.map((service) => service.title),
        description: siteConfig.description
      },
      {
        "@id": serviceId,
        "@type": "ProfessionalService",
        name: "SMM и контент-продакшен Алины Насретдиновой",
        url: absoluteUrl(),
        image: absoluteUrl("/media/photos/portrait.png"),
        areaServed: "Россия и международные проекты",
        provider: {
          "@id": personId
        },
        sameAs: [siteConfig.social.instagram, siteConfig.social.telegram],
        serviceType: services.map((service) => service.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Форматы SMM-сопровождения",
          itemListElement: pricingPlans.map((plan, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: plan.title,
            description: `${plan.price}. ${plan.subtitle}`,
            itemOffered: {
              "@type": "Service",
              name: plan.title,
              description: plan.items.join("; ")
            }
          }))
        }
      },
      {
        "@id": absoluteUrl("#website"),
        "@type": "WebSite",
        name: siteConfig.title,
        url: absoluteUrl(),
        inLanguage: "ru-RU",
        publisher: {
          "@id": personId
        }
      },
      {
        "@id": absoluteUrl("#portfolio"),
        "@type": "CreativeWork",
        name: "Кейсы SMM и Reels-продакшена",
        creator: {
          "@id": personId
        },
        about: cases.map((item) => item.title),
        inLanguage: "ru-RU"
      }
    ]
  };
}
