export const siteConfig = {
  name: "Алина Насретдинова",
  handle: "@animygirll",
  role: "SMM-специалист",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://animygirl.ru",
  title: "Алина Насретдинова | SMM-специалист и digital-маркетолог",
  description:
    "SMM-специалист и digital-маркетолог: стратегия, Reels, продакшен, UGC и органический рост для брендов. Кейсы до 3,5 млн просмотров и 1 млн охвата в месяц.",
  social: {
    instagram: "https://www.instagram.com/animygirl/",
    telegram: "http://t.me/animygirll"
  },
  navigation: [
    { href: "#cases", label: "Кейсы" },
    { href: "#services", label: "Услуги" },
    { href: "#skills", label: "Навыки" },
    { href: "#contacts", label: "Контакты" }
  ],
  keywords: [
    "SMM специалист",
    "SMM продвижение",
    "органический рост Instagram",
    "Reels сценарии",
    "контент-продакшен",
    "UGC",
    "работа с блогерами",
    "Алина Насретдинова",
    "animygirl"
  ]
} as const;

export type NavigationItem = (typeof siteConfig.navigation)[number];
