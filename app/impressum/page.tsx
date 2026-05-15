import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <section className="legal-shell">
        <Link href="/" className="legal-back">
          ← Zurück zu Klex Studios
        </Link>

        <p className="legal-kicker">Legal Notice / Impressum</p>
        <h1>Impressum</h1>

        <div className="legal-content">
          <section>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              Kimi Kempe
              <br />
              Schlickelder Straße 294
              <br />
              49479 Ibbenbüren
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>E-Mail: info.klexstudios@gmail.com</p>
          </section>

          <section>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Kimi Kempe
              <br />
              Schlickelder Straße 294
              <br />
              49479 Ibbenbüren
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für
              eigene Inhalte auf diesen Seiten verantwortlich. Wir sind jedoch
              nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2>Haftung für Links</h2>
            <p>
              Diese Website kann Links zu externen Websites enthalten. Auf deren
              Inhalte haben wir keinen Einfluss. Deshalb übernehmen wir für diese
              fremden Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2>Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              dieser Website unterliegen dem deutschen Urheberrecht.
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung.
            </p>
          </section>

          <section>
            <h2>English Legal Notice</h2>
            <p>
              Provider of this website:
              <br />
              Kimi Kempe
              <br />
              Schlickelder Straße 294
              <br />
              49479 Ibbenbüren
              <br />
              Germany
            </p>
            <p>E-mail: info.klexstudios@gmail.com</p>
            <p>
              Responsible for the content of this website:
              <br />
              Kimi Kempe, address as stated above.
            </p>
          </section>

          <section>
            <h2>Liability for Content</h2>
            <p>
              As a service provider, we are responsible for our own content on
              this website in accordance with general laws. However, we are not
              obligated to monitor transmitted or stored third-party information
              or to investigate circumstances that indicate unlawful activity.
            </p>
          </section>

          <section>
            <h2>Liability for Links</h2>
            <p>
              This website may contain links to external websites. We have no
              influence over the content of those websites and therefore cannot
              assume liability for external content. The respective provider or
              operator of the linked pages is always responsible for their
              content.
            </p>
          </section>

          <section>
            <h2>Copyright</h2>
            <p>
              The content and works created by the website operator on this
              website are subject to German copyright law. Reproduction, editing,
              distribution, or any form of use beyond the limits of copyright law
              requires written permission.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}