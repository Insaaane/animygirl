export type CaseMetric = {
  value: string;
  label: string;
};

export type PortfolioCase = {
  slug: string;
  title: string;
  shortTitle: string;
  role: string;
  challenge: string;
  work: string[];
  results: string[];
  metrics: CaseMetric[];
  images: string[];
  statsImage?: string;
  tone: "light" | "blue" | "dark";
  teamCredit?: boolean;
};

export const cases: PortfolioCase[] = [
  {
    slug: "dark-lounge",
    title: "Игровой лаундж ДАРК",
    shortTitle: "ДАРК",
    role: "SMM + digital-маркетолог, руководство продакшен-командой",
    challenge:
      "Рост узнаваемости и охватов в нише с низкой конверсией подписчиков в лиды.",
    work: [
      "выстроила контент-систему с нуля",
      "организовывала съемки Reels и фотосессии",
      "руководила оператором, монтажером, дизайнером и моделями",
      "тестировала форматы и темы"
    ],
    results: [
      "подписчики выросли с 1100 до 3100 за 9 месяцев",
      "Reels стабильно набирают 10-100K просмотров",
      "отдельные ролики вышли на 1,3 млн и 500K просмотров",
      "100 заявок на турнир при плане 40"
    ],
    metrics: [
      { value: "x3", label: "рост подписчиков на органике" },
      { value: "1 млн", label: "ежемесячный охват стабильно" },
      { value: "100", label: "заявок на турнир при плане 40" }
    ],
    images: [
      "/media/photos/dark-reels-1.png",
      "/media/photos/dark-reels-2.png"
    ],
    tone: "light"
  },
  {
    slug: "electrolog",
    title: "Electrolog, студия электроэпиляции",
    shortTitle: "Electrolog",
    role: "SMM + продакшен, работа в команде",
    challenge: "Увеличить поток лидов и привести стабильный трафик из Reels.",
    work: [
      "выстроила систему работы с блогерами и UGC",
      "организовывала съемки и фотосессии",
      "собрала контент-воронку",
      "тестировала форматы и гипотезы"
    ],
    results: [
      "лиды выросли с 11 до 30-40 в месяц за 2 месяца",
      "подписчики выросли с 1308 до 1720",
      "средние просмотры Reels выросли с 1-1,5K до 10-200K",
      "месячный охват доведен до 1 млн"
    ],
    metrics: [
      { value: "30-40", label: "лидов в месяц вместо 11" },
      { value: "10-200K", label: "просмотров Reels" },
      { value: "1 млн", label: "охвата в месяц" }
    ],
    images: [
      "/media/photos/electrolog-1.png",
      "/media/photos/electrolog-2.png",
      "/media/photos/electrolog-result-1.png",
      "/media/photos/electrolog-result-2.png",
      "/media/photos/electrolog-result-3.png",
      "/media/photos/electrolog-month-1.png"
    ],
    statsImage: "/media/photos/electrolog-month-2.png",
    tone: "blue"
  },
  {
    slug: "pavel-krasnov",
    title: "Павел Краснов, личный бренд",
    shortTitle: "Павел Краснов",
    role: "Сценарист, продюсер съемок",
    challenge:
      "Раскрыть экспертность через триггерную тему и собрать охваты без репутационных рисков.",
    work: [
      "разработала концепцию и сценарии 15 Reels",
      "упаковала экспертный блог в социальный формат",
      "организовала пакетную съемку"
    ],
    results: [
      "ролики собрали 30-50K просмотров на Reels",
      "контент решал репутационную задачу без агрессивной подачи"
    ],
    metrics: [
      { value: "15", label: "Reels снято пакетно" },
      { value: "30-50K", label: "просмотров на ролик" },
      { value: "0", label: "репутационных компромиссов" }
    ],
    images: ["/media/photos/pavel-1.png", "/media/photos/pavel-2.png"],
    tone: "dark"
  },
  {
    slug: "asbaster-production",
    title: "Агентство Asbaster Production",
    shortTitle: "Asbaster",
    role: "Сценарист Reels, командная работа агентства",
    challenge:
      "Поддерживать личные бренды и коммерческие проекты сценариями для коротких видео.",
    work: [
      "писала сценарии для риелторов, брендов и маркетинговых проектов",
      "работала с личными брендами в РФ, на Бали и международном рынке",
      "участвовала в командном производстве Reels"
    ],
    results: [
      "в командном портфеле есть кейс на 3,5 млн просмотров",
      "несколько роликов набирали 100K+ просмотров"
    ],
    metrics: [
      { value: "3,5 млн", label: "просмотров в командном кейсе" },
      { value: "100K+", label: "просмотров у нескольких роликов" },
      { value: "team", label: "заслуги производства командные" }
    ],
    images: [
      "/media/photos/asbaster-1.png",
      "/media/photos/asbaster-2.png",
      "/media/photos/asbaster-3.png",
      "/media/photos/asbaster-4.png",
      "/media/photos/asbaster-5.png",
      "/media/photos/asbaster-6.png",
      "/media/photos/asbaster-7.png",
      "/media/photos/asbaster-8.png"
    ],
    tone: "light",
    teamCredit: true
  }
];
