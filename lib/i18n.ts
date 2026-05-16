export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type PageKey =
  | "home"
  | "noxa"
  | "reson"
  | "elixa"
  | "impressum"
  | "privacy";

export function routeFor(locale: Locale, page: PageKey): string {
  const routes: Record<PageKey, string> = {
    home: `/${locale}`,
    noxa: `/${locale}/noxa`,
    reson: `/${locale}/reson`,
    elixa: `/${locale}/elixa`,
    impressum: `/${locale}/impressum`,
    privacy: locale === "de" ? `/${locale}/datenschutz` : `/${locale}/privacy`,
  };

  return routes[page];
}

export const dictionaries = {
  en: {
    meta: {
      title: "Klex Studios",
      description:
        "Klex Studios builds digital products for real social moments, dating, events, parties, and connection.",
    },
    nav: {
      studio: "Studio",
      noxa: "Noxa",
      reson: "Reson",
      elixa: "Elixa",
      about: "About",
      manifesto: "Manifesto",
      contact: "Contact",
    },
    footer: {
      rights: "© 2026 Klex Studios. All rights reserved.",
      imprint: "Impressum",
      privacy: "Privacy",
    },
    home: {
      kicker: "Independent digital product studio",
      titleA: "We build software",
      titleB: "for real life.",
      lead:
        "Klex Studios creates thoughtful apps for dating, parties, events and social moments — designed to bring people closer, not deeper into feeds.",
      primary: "Explore the ecosystem",
      secondary: "Read the manifesto",
      purposeKicker: "Built with intent",
      purpose1: "Real-world connection",
      purpose2: "Less scrolling",
      purpose3: "More living",
      appsKicker: "Our apps",
      appsTitleA: "Different products.",
      appsTitleB: "One mission.",
      appsLead:
        "Each app targets a different social moment - meeting, dating, playing, going out - but they all point back to real life.",
      manifestoKicker: "Our manifesto",
      manifestoTitleA: "Principles over",
      manifestoTitleB: "everything.",
      contactKicker: "Contact",
      contactTitle: "Building quietly. Shipping intentionally.",
      contactLead:
        "Klex Studios is currently developing its first product ecosystem across social discovery, dating, and party experiences.",
      apps: [
        {
          name: "Noxa",
          status: "In concepting phase",
          color: "#3B6DFF",
          logo: "/logos/noxa-logo.png",
          title: "Discover what is happening around you.",
        },
        {
          name: "Reson",
          status: "In development",
          color: "#A66CFF",
          logo: "/logos/reson-logo.png",
          title: "Choose people by more than pictures.",
        },
        {
          name: "Elixa",
          status: "In development",
          color: "#38F06F",
          logo: "/logos/elixa-logo.png",
          title: "Turn nights into shared moments.",
        },
      ],
      principles: [
        {
          title: "Real life first",
          text: "Our products are designed to support real moments, not replace them.",
        },
        {
          title: "Less passive scrolling",
          text: "We build against empty engagement loops and design for action, presence, and intent.",
        },
        {
          title: "Honest by design",
          text: "Clear status, no fake traction, no fake screenshots, no pretending the product is further than it is.",
        },
      ],
    },
    noxa: {
      kicker: "Noxa by Klex Studios",
      titleA: "Meet people.",
      titleB: "Find events.",
      titleC: "Discover",
      titleAccent: "real life.",
      lead:
        "Noxa is your social-discovery app for events, parties, groups, and spontaneous experiences nearby. Leave endless feeds behind and step into what is happening around you.",
      primary: "Explore Noxa",
      secondary: "View concept",
      status1: "● In concepting phase",
      status2: "● Honest visuals coming soon",
      placeholderStatus: "In Concepting Phase",
      placeholderTitle: "Pictures Coming Soon",
      placeholderText: "Concept visuals will be shown once Noxa has honest product screens.",
      placeholderText2: "Screenshots will be added when the product concept is ready to show.",
      features: [
        { icon: "⌖", title: "Nearby events", text: "See what is happening around you in real time. From parties to pop-ups and more." },
        { icon: "☷", title: "Group discovery", text: "Find groups that match your vibe and connect with people who want to do things." },
        { icon: "♡", title: "Real-world connection", text: "Designed to move people closer — in person, not just in feeds." },
        { icon: "▯", title: "Cleaner than feeds", text: "No endless scroll. Just timely updates on real things worth showing up for." },
      ],
      storyKicker: "Why Noxa exists",
      storyTitleA: "Real life is worth",
      storyTitleB: "discovering.",
      storyText:
        "We built Noxa to help people break out of passive scrolling and into active living. To make it effortless to discover what is happening, find your people, and create unforgettable moments — together.",
      principles: [
        { title: "For everyone", text: "Whether you are new in town or just looking for your people." },
        { title: "Spontaneous", text: "Great moments do not always plan ahead. Noxa helps you catch them." },
        { title: "Safe & respectful", text: "Community-first design with trust, privacy, and respect at the core." },
        { title: "Local everywhere", text: "Built for real neighborhoods, not just big cities." },
      ],
    },
    reson: {
      kicker: "Reson by Klex Studios",
      titleA: "Real connection.",
      titleB: "Real compatibility.",
      titleC: "You would",
      titleAccent: "choose differently.",
      lead:
        "Reson is a modern dating app for people who want more than swipes and small talk. We focus on better signals, shared values, and real compatibility.",
      primary: "Explore Reson",
      secondary: "Read the idea",
      micro: ["Privacy first", "No endless swiping", "Built for real relationships"],
      placeholderStatus: "In Development",
      placeholderTitle: "Pictures Coming Soon",
      placeholderText: "Real app visuals will be added once Reson has honest product screenshots.",
      placeholderText2: "Screenshots will be shown here when the app UI is ready to present.",
      features: [
        { icon: "◎", title: "Compatibility first", text: "Matching looks beyond photos and vanity metrics." },
        { icon: "☷", title: "Fewer, better choices", text: "Quality over quantity, with calmer discovery." },
        { icon: "♡", title: "Built around values", text: "Shared values create stronger conversations." },
        { icon: "✦", title: "Calmer than swipe culture", text: "No addictive loops. Just intentional design." },
      ],
      experienceKicker: "The Reson experience",
      experienceTitleA: "Designed for depth,",
      experienceTitleB: "not dopamine.",
      experienceText: "Every part of Reson is built to help you go deeper with less friction and more intention.",
      manifestKicker: "Why Reson exists",
      manifestTitleA: "Because real love",
      manifestTitleB: "deserves real design.",
      manifestText: "Reson is built with care, ethics, and intention. Less noise, better signals, and relationships that can last.",
      bullets: ["Independent and focused", "Privacy by design", "Quality over noise"],
      manifestLink: "Read our manifesto",
    },
    elixa: {
      kicker: "Elixa by Klex Studios",
      titleA: "Party harder.",
      titleAccent: "Play together.",
      lead:
        "Elixa is the modern drinking game app for unforgettable nights. Premium games, fast setup, and endless laughs — all in a sleek, dark experience.",
      primary: "Explore Elixa",
      secondary: "See the games",
      micro: ["In development", "Honest visuals coming soon", "Built by Klex Studios"],
      placeholderStatus: "In Development",
      placeholderTitle: "Pictures Coming Soon",
      placeholderText: "Real app screenshots will be added when Elixa is ready to show publicly.",
      placeholderText2: "Screenshots will be added here once the real app UI is ready.",
      features: [
        { icon: "♕", title: "Premium party games", text: "Curated games that are fun, social, and never boring." },
        { icon: "ϟ", title: "Fast setup", text: "Create a party in seconds and get straight to playing." },
        { icon: "▣", title: "Different game modes", text: "From classic to spicy to wild. Choose your vibe." },
        { icon: "✦", title: "Dark premium design", text: "A slick, immersive experience built for night mode." },
      ],
      storyKicker: "Built for great nights",
      storyTitleA: "Designed for the way",
      storyTitleB: "you party.",
      storyText: "Elixa brings your favorite drinking games to life with a fast, beautiful, and distraction-free experience. More laughs. Less hassle.",
      storyLink: "Explore all games",
      vibeKicker: "The Elixa vibe",
      vibeTitleA: "More energy.",
      vibeTitleB: "Better nights.",
      vibeText: "Elixa is built for real connections and unforgettable moments. No ads. No clutter. Just you, your friends, and great games.",
      vibePoints: ["No ads. Ever.", "Works offline", "Regular new games", "Made for friends"],
    },
    legal: {
      back: "← Back to Klex Studios",
      imprintTitle: "Legal Notice",
      privacyTitle: "Privacy Policy",
    },
  },
  de: {
    meta: {
      title: "Klex Studios",
      description:
        "Klex Studios entwickelt digitale Produkte für echte soziale Momente: Dating, Events, Partys und echte Verbindung.",
    },
    nav: {
      studio: "Studio",
      noxa: "Noxa",
      reson: "Reson",
      elixa: "Elixa",
      about: "Über uns",
      manifesto: "Manifest",
      contact: "Kontakt",
    },
    footer: {
      rights: "© 2026 Klex Studios. Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    home: {
      kicker: "Unabhängiges Digitalstudio",
      titleA: "Software bauen.",
      titleB: "Echtes Leben.",
      lead:
        "Klex Studios entwickelt Apps für Dating, Partys, Events und soziale Momente — gemacht, um Menschen näher zusammenzubringen, nicht tiefer in Feeds zu ziehen.",
      primary: "Apps ansehen",
      secondary: "Manifest lesen",
      purposeKicker: "Mit Haltung gebaut",
      purpose1: "Echte Verbindung",
      purpose2: "Weniger Scrollen",
      purpose3: "Mehr Erleben",
      appsKicker: "Unsere Apps",
      appsTitleA: "Drei Produkte.",
      appsTitleB: "Eine Richtung.",
      appsLead:
        "Jede App fokussiert einen anderen sozialen Moment — treffen, daten, spielen, rausgehen. Alle führen zurück ins echte Leben.",
      manifestoKicker: "Unser Manifest",
      manifestoTitleA: "Prinzipien vor",
      manifestoTitleB: "Wachstum um jeden Preis.",
      contactKicker: "Kontakt",
      contactTitle: "Ruhig entwickeln. Bewusst veröffentlichen.",
      contactLead:
        "Klex Studios entwickelt aktuell ein erstes Produkt-Ökosystem rund um Social Discovery, Dating und Party-Erlebnisse.",
      apps: [
        {
          name: "Noxa",
          status: "Konzeptphase",
          color: "#3B6DFF",
          logo: "/logos/noxa-logo.png",
          title: "Finde heraus, was um dich herum passiert.",
        },
        {
          name: "Reson",
          status: "In Entwicklung",
          color: "#A66CFF",
          logo: "/logos/reson-logo.png",
          title: "Wähle Menschen nach mehr als Bildern.",
        },
        {
          name: "Elixa",
          status: "In Entwicklung",
          color: "#38F06F",
          logo: "/logos/elixa-logo.png",
          title: "Mach aus Nächten gemeinsame Momente.",
        },
      ],
      principles: [
        {
          title: "Echtes Leben zuerst",
          text: "Unsere Produkte sollen echte Momente unterstützen — nicht ersetzen.",
        },
        {
          title: "Weniger passives Scrollen",
          text: "Wir gestalten gegen leere Engagement-Loops und für Handlung, Präsenz und Absicht.",
        },
        {
          title: "Ehrlich im Design",
          text: "Klarer Status, keine Fake-Traktion, keine falschen Screenshots, kein größerer Schein als die Realität.",
        },
      ],
    },
    noxa: {
      kicker: "Noxa von Klex Studios",
      titleA: "Menschen treffen.",
      titleB: "Events finden.",
      titleC: "Echtes Leben",
      titleAccent: "entdecken.",
      lead:
        "Noxa ist eine Social-Discovery-App für Events, Partys, Gruppen und spontane Erlebnisse in deiner Nähe. Weniger endlose Feeds. Mehr von dem, was gerade wirklich passiert.",
      primary: "Noxa ansehen",
      secondary: "Konzept ansehen",
      status1: "● Konzeptphase",
      status2: "● Echte Visuals folgen",
      placeholderStatus: "Konzeptphase",
      placeholderTitle: "Visuals folgen",
      placeholderText: "Konzeptvisuals erscheinen, sobald Noxa echte Produktscreens zeigen kann.",
      placeholderText2: "Screenshots werden ergänzt, sobald das Produktkonzept vorzeigbar ist.",
      features: [
        { icon: "⌖", title: "Events in der Nähe", text: "Sieh, was um dich herum passiert — von Partys über Pop-ups bis zu spontanen Treffen." },
        { icon: "☷", title: "Gruppen entdecken", text: "Finde Gruppen, die zu deinem Vibe passen, und Menschen, die wirklich etwas unternehmen wollen." },
        { icon: "♡", title: "Verbindung im echten Leben", text: "Gebaut, um Menschen persönlich zusammenzubringen — nicht nur in einem weiteren Feed." },
        { icon: "▯", title: "Klarer als Feeds", text: "Kein endloses Scrollen. Nur aktuelle Hinweise auf Dinge, für die es sich lohnt rauszugehen." },
      ],
      storyKicker: "Warum Noxa existiert",
      storyTitleA: "Echtes Leben will",
      storyTitleB: "entdeckt werden.",
      storyText:
        "Noxa soll Menschen aus passivem Scrollen in aktive Erlebnisse bringen. Einfacher entdecken, was passiert, passende Leute finden und gemeinsame Momente schaffen.",
      principles: [
        { title: "Für alle", text: "Für neue Leute in der Stadt genauso wie für Menschen, die einfach mehr erleben wollen." },
        { title: "Spontan", text: "Gute Momente entstehen nicht immer nach Plan. Noxa hilft, sie rechtzeitig zu finden." },
        { title: "Sicher & respektvoll", text: "Community-first Design mit Vertrauen, Privatsphäre und Respekt als Grundlage." },
        { title: "Lokal gedacht", text: "Für echte Orte und Nachbarschaften gebaut — nicht nur für große Städte." },
      ],
    },
    reson: {
      kicker: "Reson von Klex Studios",
      titleA: "Echte Verbindung.",
      titleB: "Echte Passung.",
      titleC: "Du würdest",
      titleAccent: "anders wählen.",
      lead:
        "Reson ist eine moderne Dating-App für Menschen, die mehr wollen als Swipes und Smalltalk. Im Fokus stehen bessere Signale, gemeinsame Werte und echte Kompatibilität.",
      primary: "Reson ansehen",
      secondary: "Idee lesen",
      micro: ["Privacy first", "Kein endloses Swipen", "Für echte Beziehungen"],
      placeholderStatus: "In Entwicklung",
      placeholderTitle: "Visuals folgen",
      placeholderText: "Echte App-Visuals werden ergänzt, sobald Reson ehrliche Produktscreens zeigen kann.",
      placeholderText2: "Screenshots erscheinen hier, sobald die App-UI vorzeigbar ist.",
      features: [
        { icon: "◎", title: "Kompatibilität zuerst", text: "Matching schaut über Fotos und oberflächliche Kennzahlen hinaus." },
        { icon: "☷", title: "Weniger, bessere Auswahl", text: "Qualität statt Masse — mit ruhigerer, bewussterer Discovery." },
        { icon: "♡", title: "Auf Werten gebaut", text: "Gemeinsame Werte schaffen bessere Gespräche und realistischere Verbindungen." },
        { icon: "✦", title: "Ruhiger als Swipe-Kultur", text: "Keine süchtig machenden Loops. Nur bewusstes Produktdesign." },
      ],
      experienceKicker: "Die Reson Experience",
      experienceTitleA: "Für Tiefe gemacht,",
      experienceTitleB: "nicht für Dopamin.",
      experienceText: "Jeder Teil von Reson soll helfen, mit weniger Reibung und mehr Absicht bessere Gespräche zu beginnen.",
      manifestKicker: "Warum Reson existiert",
      manifestTitleA: "Echte Liebe braucht",
      manifestTitleB: "besseres Design.",
      manifestText: "Reson wird mit Sorgfalt, Ethik und Absicht gebaut. Weniger Lärm, bessere Signale und Beziehungen, die eine echte Chance haben.",
      bullets: ["Unabhängig und fokussiert", "Privacy by design", "Qualität statt Lärm"],
      manifestLink: "Manifest lesen",
    },
    elixa: {
      kicker: "Elixa von Klex Studios",
      titleA: "Mehr feiern.",
      titleAccent: "Besser spielen.",
      lead:
        "Elixa ist die moderne Trinkspiel-App für unvergessliche Nächte. Premium-Spiele, schneller Start und starke Momente — in einem cleanen, dunklen Erlebnis.",
      primary: "Elixa ansehen",
      secondary: "Spiele ansehen",
      micro: ["In Entwicklung", "Echte Visuals folgen", "Gebaut von Klex Studios"],
      placeholderStatus: "In Entwicklung",
      placeholderTitle: "Visuals folgen",
      placeholderText: "Echte App-Screenshots werden ergänzt, sobald Elixa öffentlich vorzeigbar ist.",
      placeholderText2: "Screenshots werden ergänzt, sobald die echte App-UI bereit ist.",
      features: [
        { icon: "♕", title: "Premium-Partyspiele", text: "Kuratierte Spiele, die sozial, direkt und nicht nach Standard-App wirken." },
        { icon: "ϟ", title: "Schneller Start", text: "Party erstellen, Spieler hinzufügen und ohne Umwege loslegen." },
        { icon: "▣", title: "Verschiedene Modi", text: "Von locker bis spicy bis komplett chaotisch. Wähle den passenden Vibe." },
        { icon: "✦", title: "Dunkles Premium-Design", text: "Ein slickes, immersives Erlebnis für Abende, Partys und Night Mode." },
      ],
      storyKicker: "Für gute Nächte gebaut",
      storyTitleA: "Gemacht für Nächte,",
      storyTitleB: "die hängen bleiben.",
      storyText: "Elixa bringt Trinkspiele in ein schnelles, schönes und ablenkungsfreies Erlebnis. Mehr Lacher. Weniger Aufwand.",
      storyLink: "Alle Spiele ansehen",
      vibeKicker: "Der Elixa Vibe",
      vibeTitleA: "Mehr Energie.",
      vibeTitleB: "Bessere Nächte.",
      vibeText: "Elixa ist für echte Verbindungen und gute Momente gebaut. Keine Werbung. Kein Chaos. Nur du, deine Freunde und starke Spiele.",
      vibePoints: ["Keine Werbung. Niemals.", "Funktioniert offline", "Regelmäßig neue Spiele", "Gemacht für Freunde"],
    },
    legal: {
      back: "← Zurück zu Klex Studios",
      imprintTitle: "Impressum",
      privacyTitle: "Datenschutzerklärung",
    },
  },

} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
