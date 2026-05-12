'use client';

import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';

type Lang = 'en' | 'de';
type Tab = 'studio' | 'noxa' | 'elixa' | 'reson';

type Theme = {
  accent: string;
  accent2: string;
  accent3: string;
  rgb: string;
  letter: string;
};

type TabContent = {
  name: string;
  label: string;
  status: string;
  headline: string;
  subline: string;
  intro: string;
  problemTitle: string;
  problem: string;
  solutionTitle: string;
  solution: string;
  nextTitle: string;
  next: string;
  bullets: string[];
};

type SiteCopy = {
  nav: Record<Tab, string>;
  lang: Record<Lang, string>;
  ui: {
    placeholder: string;
    replace: string;
    status: string;
    focus: string;
    next: string;
    builtBy: string;
    mission: string;
    products: string;
  };
  tabs: Record<Tab, TabContent>;
};

const tabs: Tab[] = ['studio', 'noxa', 'elixa', 'reson'];

const logos: Record<Tab, string> = {
  studio: '/logos/klex-studios.png',
  noxa: '/logos/noxa.png',
  elixa: '/logos/elixa.png',
  reson: '/logos/reson.png',
};

const themes: Record<Tab, Theme> = {
  studio: {
    accent: '#ffffff',
    accent2: '#38f06f',
    accent3: '#a855f7',
    rgb: '255,255,255',
    letter: 'K',
  },
  noxa: {
    accent: '#2F80FF',
    accent2: '#68D8FF',
    accent3: '#165DFF',
    rgb: '47,128,255',
    letter: 'N',
  },
  elixa: {
    accent: '#38F06F',
    accent2: '#B6FF7A',
    accent3: '#00C853',
    rgb: '56,240,111',
    letter: 'E',
  },
  reson: {
    accent: '#A855F7',
    accent2: '#F0ABFC',
    accent3: '#7C3AED',
    rgb: '168,85,247',
    letter: 'R',
  },
};

const copy: Record<Lang, SiteCopy> = {
  en: {
    nav: {
      studio: 'Klex Studios',
      noxa: 'Noxa',
      elixa: 'Elixa',
      reson: 'Reson',
    },
    lang: {
      en: 'EN',
      de: 'DE',
    },
    ui: {
      placeholder: 'App preview placeholder',
      replace: 'Replace with real screen later',
      status: 'Status',
      focus: 'Focus',
      next: 'Next',
      builtBy: 'Built by Kimi',
      mission: 'The mission',
      products: 'Products',
    },
    tabs: {
      studio: {
        name: 'Klex Studios',
        label: 'Independent app studio',
        status: 'In development',
        headline: 'Apps that make people meet, talk and feel closer.',
        subline:
          'Klex Studios is my independent studio for apps around dating, parties, discovery and real social moments.',
        intro:
          'I started Klex Studios because many digital products are built to hold attention, but not enough are built to create connection. My goal is simple: build apps that help people meet, talk, laugh, date, play and experience something together.',
        problemTitle: 'Why it exists',
        problem:
          'Technology often makes social life more passive: scrolling, watching, comparing and waiting. I want to build products that move people back into real interaction.',
        solutionTitle: 'What Klex Studios builds',
        solution:
          'The studio focuses on apps with a social core: Noxa for real-world discovery, Elixa for group energy, and Reson for more honest dating.',
        nextTitle: 'Current direction',
        next:
          'The goal is not to look like a huge company. The goal is to build a clear product world, test ideas properly and turn the strongest ones into real apps.',
        bullets: ['Dating', 'Party games', 'Discovery', 'Human connection'],
      },
      noxa: {
        name: 'Noxa',
        label: 'Social discovery',
        status: 'Concept',
        headline: 'Find plans, groups and places around you.',
        subline:
          'Noxa is a concept for discovering events, parties, communities and real experiences nearby.',
        intro:
          'Noxa is for the moment where people want to go out, but do not know what is happening. Instead of another endless feed, it should show real places, groups and moments worth joining.',
        problemTitle: 'The problem',
        problem:
          'People often hear about events too late, search through messy chats, or stay home because finding plans feels harder than it should.',
        solutionTitle: 'The idea',
        solution:
          'Noxa should make nearby social life visible: parties, open groups, student events, meetups and spontaneous moments in one clean discovery layer.',
        nextTitle: 'Current status',
        next:
          'Noxa is still in concept. The next step is defining the discovery model: what should appear, how trust works and how people join without making it awkward.',
        bullets: ['Events', 'Parties', 'Groups', 'Nearby'],
      },
      elixa: {
        name: 'Elixa',
        label: 'Party game app',
        status: 'In development',
        headline: 'A party app that gets the room talking.',
        subline:
          'Elixa is a minimal drinking and party game app for groups, pre-drinks and nights with friends.',
        intro:
          'Elixa should feel quick, clean and fun. No trashy overload, no ugly buttons, no confusing setup. Open it, pick the vibe, start the round.',
        problemTitle: 'The problem',
        problem:
          'Most drinking game apps look cheap, feel overloaded and often kill the mood because the app itself takes too much attention.',
        solutionTitle: 'The idea',
        solution:
          'Elixa should support the group instead of becoming the center of the room: strong prompts, clean categories, fast rounds and a design that feels premium but still playful.',
        nextTitle: 'Current status',
        next:
          'Elixa is in development. The focus is the core game flow, strong categories, polished visuals and content that actually creates reactions.',
        bullets: ['Truth', 'Party', 'Chaos', 'Group energy'],
      },
      reson: {
        name: 'Reson',
        label: 'Dating app',
        status: 'In development',
        headline: 'Dating that asks what actually matters.',
        subline:
          'Reson is a dating app focused on values, compatibility and more intentional choices.',
        intro:
          'Reson is built against the idea that more swiping automatically means better dating. It should help people understand each other faster and choose with more clarity.',
        problemTitle: 'The problem',
        problem:
          'Many dating apps optimize attention, not connection. People get more profiles, more noise and more shallow decisions, but not necessarily better matches.',
        solutionTitle: 'The idea',
        solution:
          'Reson focuses on values, intentions and compatibility signals. Fewer empty interactions, more meaningful information, calmer discovery.',
        nextTitle: 'Current status',
        next:
          'Reson is in development. The current focus is onboarding, profile structure, compatibility scoring and a calmer matching experience.',
        bullets: ['Values', 'Intentions', 'Compatibility', 'Depth'],
      },
    },
  },

  de: {
    nav: {
      studio: 'Klex Studios',
      noxa: 'Noxa',
      elixa: 'Elixa',
      reson: 'Reson',
    },
    lang: {
      en: 'EN',
      de: 'DE',
    },
    ui: {
      placeholder: 'App Preview Platzhalter',
      replace: 'Später durch echten Screen ersetzen',
      status: 'Status',
      focus: 'Fokus',
      next: 'Nächster Schritt',
      builtBy: 'Gebaut von Kimi',
      mission: 'Die Mission',
      products: 'Produkte',
    },
    tabs: {
      studio: {
        name: 'Klex Studios',
        label: 'Unabhängiges App-Studio',
        status: 'Im Aufbau',
        headline: 'Apps, die Menschen näher zusammenbringen.',
        subline:
          'Klex Studios ist mein unabhängiges Studio für Apps rund um Dating, Partys, Discovery und echte soziale Momente.',
        intro:
          'Ich habe Klex Studios aufgebaut, weil viele digitale Produkte Aufmerksamkeit binden, aber zu wenige echte Verbindung schaffen. Mein Ziel ist einfach: Apps entwickeln, die bessere Bedingungen dafür schaffen, dass Menschen sich treffen, reden, lachen, daten, spielen und gemeinsam etwas erleben.',
        problemTitle: 'Warum es existiert',
        problem:
          'Technologie macht soziales Leben oft passiver: scrollen, zuschauen, vergleichen, warten. Ich möchte Produkte bauen, die Menschen wieder mehr in echte Interaktion bringen.',
        solutionTitle: 'Was Klex Studios baut',
        solution:
          'Das Studio fokussiert sich auf Apps mit sozialem Kern: Noxa für reale Discovery, Elixa für Gruppenenergie und Reson für ehrlicheres Dating.',
        nextTitle: 'Aktuelle Richtung',
        next:
          'Das Ziel ist nicht, wie ein riesiger Konzern zu wirken. Das Ziel ist eine klare Produktwelt, echte Tests und Apps, die Schritt für Schritt besser werden.',
        bullets: ['Dating', 'Partyspiele', 'Discovery', 'Verbindung'],
      },
      noxa: {
        name: 'Noxa',
        label: 'Social Discovery',
        status: 'Konzept',
        headline: 'Finde Pläne, Gruppen und Orte in deiner Nähe.',
        subline:
          'Noxa ist ein Konzept für Events, Partys, Communities und echte Erlebnisse in der Nähe.',
        intro:
          'Noxa ist für den Moment, in dem man raus möchte, aber nicht weiß, was gerade passiert. Statt noch einem endlosen Feed soll Noxa echte Orte, Gruppen und Momente sichtbar machen.',
        problemTitle: 'Das Problem',
        problem:
          'Viele erfahren zu spät von Events, suchen in chaotischen Chats oder bleiben zuhause, weil gute Pläne zu finden unnötig schwer ist.',
        solutionTitle: 'Die Idee',
        solution:
          'Noxa soll soziales Leben in der Nähe sichtbar machen: Partys, offene Gruppen, Studenten-Events, Meetups und spontane Momente in einer klaren Discovery-Oberfläche.',
        nextTitle: 'Aktueller Status',
        next:
          'Noxa ist aktuell im Konzept. Der nächste Schritt ist das Discovery-Modell: Was wird angezeigt, wie entsteht Vertrauen und wie tritt man bei, ohne dass es awkward wird?',
        bullets: ['Events', 'Partys', 'Gruppen', 'Nearby'],
      },
      elixa: {
        name: 'Elixa',
        label: 'Partyspiel-App',
        status: 'In Entwicklung',
        headline: 'Eine Party-App, die den Raum ins Gespräch bringt.',
        subline:
          'Elixa ist eine minimalistische Trinkspiel- und Partyspiel-App für Gruppen, Vorglühen und Abende mit Freunden.',
        intro:
          'Elixa soll schnell, sauber und spaßig wirken. Kein trashiger Overload, keine hässlichen Buttons, kein unnötiges Setup. Öffnen, Vibe wählen, Runde starten.',
        problemTitle: 'Das Problem',
        problem:
          'Viele Trinkspiel-Apps sehen billig aus, sind überladen und ziehen zu viel Aufmerksamkeit auf das Handy, statt die Gruppe zu aktivieren.',
        solutionTitle: 'Die Idee',
        solution:
          'Elixa soll die Gruppe unterstützen, nicht den Abend übernehmen: starke Prompts, klare Kategorien, schnelle Runden und ein Design, das hochwertig, aber trotzdem spielerisch wirkt.',
        nextTitle: 'Aktueller Status',
        next:
          'Elixa ist in Entwicklung. Der Fokus liegt auf Core Game Flow, starken Kategorien, poliertem Design und Content, der wirklich Reaktionen erzeugt.',
        bullets: ['Truth', 'Party', 'Chaos', 'Gruppenenergie'],
      },
      reson: {
        name: 'Reson',
        label: 'Dating-App',
        status: 'In Entwicklung',
        headline: 'Dating, das fragt, was wirklich zählt.',
        subline:
          'Reson ist eine Dating-App mit Fokus auf Werte, Kompatibilität und bewusstere Entscheidungen.',
        intro:
          'Reson entsteht gegen die Idee, dass mehr Swipen automatisch besseres Dating bedeutet. Die App soll Menschen helfen, sich schneller besser zu verstehen und klarer zu wählen.',
        problemTitle: 'Das Problem',
        problem:
          'Viele Dating-Apps optimieren Aufmerksamkeit, nicht Verbindung. Man bekommt mehr Profile, mehr Rauschen und mehr oberflächliche Entscheidungen, aber nicht unbedingt bessere Matches.',
        solutionTitle: 'Die Idee',
        solution:
          'Reson setzt auf Werte, Absichten und Kompatibilitätssignale. Weniger leere Interaktionen, mehr relevante Informationen und eine ruhigere Art, Menschen kennenzulernen.',
        nextTitle: 'Aktueller Status',
        next:
          'Reson ist in Entwicklung. Der aktuelle Fokus liegt auf Onboarding, Profilstruktur, Kompatibilitäts-Score und einer ruhigeren Matching Experience.',
        bullets: ['Werte', 'Absichten', 'Kompatibilität', 'Tiefe'],
      },
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeTab, setActiveTab] = useState<Tab>('studio');

  const t = copy[lang];
  const current = t.tabs[activeTab];
  const theme = themes[activeTab];

  const style = useMemo(
    () =>
      ({
        '--accent': theme.accent,
        '--accent-2': theme.accent2,
        '--accent-3': theme.accent3,
        '--accent-rgb': theme.rgb,
      }) as CSSProperties,
    [theme],
  );

  return (
    <main className={`site site-${activeTab}`} style={style}>
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-blob bg-blob-one" />
        <div className="bg-blob bg-blob-two" />
        <div className="bg-blob bg-blob-three" />
      </div>

      <header className="topbar">
        <button className="brand" type="button" onClick={() => setActiveTab('studio')}>
          <Logo tab="studio" letter="K" />
          <span>
            <strong>Klex Studios</strong>
            <small>{t.tabs.studio.label}</small>
          </span>
        </button>

        <nav className="nav-tabs" aria-label="Main navigation">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? 'active' : ''}
            >
              {t.nav[tab]}
            </button>
          ))}
        </nav>

        <div className="language">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={lang === 'en' ? 'active' : ''}
          >
            🇬🇧 {t.lang.en}
          </button>
          <button
            type="button"
            onClick={() => setLang('de')}
            className={lang === 'de' ? 'active' : ''}
          >
            🇩🇪 {t.lang.de}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="badge">
            <span />
            {current.label}
            <i />
            {current.status}
          </div>

          <h1>{current.headline}</h1>

          <p className="subline">{current.subline}</p>
          <p className="intro">{current.intro}</p>

          <div className="bullet-row">
            {current.bullets.map((bullet) => (
              <span key={bullet}>{bullet}</span>
            ))}
          </div>
        </div>

        <AppPreview tab={activeTab} lang={lang} />
      </section>

      <section className="product-strip" aria-label={t.ui.products}>
        {(['noxa', 'elixa', 'reson'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            className={`product-mini mini-${tab}`}
            onClick={() => setActiveTab(tab)}
          >
            <Logo tab={tab} letter={themes[tab].letter} compact />
            <span>
              <strong>{t.tabs[tab].name}</strong>
              <small>{t.tabs[tab].status}</small>
            </span>
          </button>
        ))}
      </section>

      <section className="info-grid">
        <article className="info-card large">
          <span>{t.ui.mission}</span>
          <h2>{current.problemTitle}</h2>
          <p>{current.problem}</p>
        </article>

        <article className="info-card">
          <span>{t.ui.focus}</span>
          <h2>{current.solutionTitle}</h2>
          <p>{current.solution}</p>
        </article>

        <article className="info-card">
          <span>{t.ui.next}</span>
          <h2>{current.nextTitle}</h2>
          <p>{current.next}</p>
        </article>
      </section>

      <footer className="footer">
        <p>
          {lang === 'en'
            ? 'Independent app studio in development.'
            : 'Unabhängiges App-Studio im Aufbau.'}
        </p>
        <span>© {new Date().getFullYear()} Klex Studios</span>
      </footer>
    </main>
  );
}

function Logo({
  tab,
  letter,
  compact = false,
}: {
  tab: Tab;
  letter: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`logo logo-${tab} ${compact ? 'compact' : ''}`}>
        <b>{letter}</b>
      </span>
    );
  }

  return (
    <span className={`logo logo-${tab} ${compact ? 'compact' : ''}`}>
      <img src={logos[tab]} alt={`${tab} logo`} onError={() => setFailed(true)} />
    </span>
  );
}

function AppPreview({ tab, lang }: { tab: Tab; lang: Lang }) {
  const current = copy[lang].tabs[tab];
  const ui = copy[lang].ui;

  return (
    <div className={`preview preview-${tab}`}>
      <div className="phone">
        <div className="phone-top">
          <div className="phone-brand">
            <Logo tab={tab} letter={themes[tab].letter} compact />
            <div>
              <strong>{current.name}</strong>
              <small>{current.label}</small>
            </div>
          </div>

          <span className="phone-status">{current.status}</span>
        </div>

        <div className="phone-screen">
          {tab === 'studio' && <StudioScreen lang={lang} />}
          {tab === 'noxa' && <NoxaScreen lang={lang} />}
          {tab === 'elixa' && <ElixaScreen lang={lang} />}
          {tab === 'reson' && <ResonScreen lang={lang} />}
        </div>

        <div className="placeholder-note">
          <span>{ui.placeholder}</span>
          <small>{ui.replace}</small>
        </div>
      </div>
    </div>
  );
}

function StudioScreen({ lang }: { lang: Lang }) {
  return (
    <div className="screen screen-studio">
      <div className="studio-card-main">
        <span>{lang === 'en' ? 'Product world' : 'Produktwelt'}</span>
        <h3>Klex Studios</h3>
      </div>

      <div className="studio-app-grid">
        <div className="app-tile noxa-tile">
          <strong>Noxa</strong>
          <span>Discovery</span>
        </div>
        <div className="app-tile elixa-tile">
          <strong>Elixa</strong>
          <span>Party</span>
        </div>
        <div className="app-tile reson-tile">
          <strong>Reson</strong>
          <span>Dating</span>
        </div>
      </div>
    </div>
  );
}

function NoxaScreen({ lang }: { lang: Lang }) {
  return (
    <div className="screen screen-noxa">
      <div className="map">
        <div className="map-line line-a" />
        <div className="map-line line-b" />
        <div className="pin pin-one">🎉</div>
        <div className="pin pin-two">📍</div>
        <div className="pin pin-three">👥</div>
      </div>

      <div className="event-card">
        <span>{lang === 'en' ? 'Tonight nearby' : 'Heute in der Nähe'}</span>
        <strong>{lang === 'en' ? 'Open house party' : 'Offene Hausparty'}</strong>
      </div>

      <div className="event-card second">
        <span>{lang === 'en' ? 'Group' : 'Gruppe'}</span>
        <strong>{lang === 'en' ? 'Student meetup' : 'Studenten-Treffen'}</strong>
      </div>
    </div>
  );
}

function ElixaScreen({ lang }: { lang: Lang }) {
  return (
    <div className="screen screen-elixa">
      <div className="game-card">
        <span>{lang === 'en' ? 'Party Mode' : 'Party-Modus'}</span>
        <h3>
          {lang === 'en'
            ? 'Who here would survive a spontaneous roadtrip?'
            : 'Wer hier würde einen spontanen Roadtrip überleben?'}
        </h3>
      </div>

      <div className="mode-row">
        <span>Truth</span>
        <span>Party</span>
        <span>Chaos</span>
      </div>

      <div className="stacked-deck">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function ResonScreen({ lang }: { lang: Lang }) {
  return (
    <div className="screen screen-reson">
      <div className="match-card">
        <div className="match-top">
          <div className="avatar" />
          <div>
            <strong>{lang === 'en' ? 'Compatibility' : 'Kompatibilität'}</strong>
            <span>{lang === 'en' ? 'Values + intention' : 'Werte + Absicht'}</span>
          </div>
        </div>

        <div className="score-ring">
          <span>91%</span>
        </div>

        <div className="tag-row">
          <span>{lang === 'en' ? 'Values' : 'Werte'}</span>
          <span>{lang === 'en' ? 'Intent' : 'Absicht'}</span>
          <span>{lang === 'en' ? 'Calm' : 'Ruhig'}</span>
        </div>
      </div>
    </div>
  );
}