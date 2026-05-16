import type { Locale } from "@/lib/i18n";

export default function PrivacyContent({ locale }: { locale: Locale }) {
  if (locale === "de") {
    return (
      <>
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
          <p>
            Kimi Kempe
            <br />
            Schlickelder Straße 294
            <br />
            49479 Ibbenbüren
            <br />
            Deutschland
          </p>
          <p>E-Mail: info.klexstudios@gmail.com</p>
        </section>

        <section>
          <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>
            Diese Website dient der Darstellung von Klex Studios und den dazugehörigen
            App-Projekten. Beim Besuch dieser Website können personenbezogene Daten
            verarbeitet werden.
          </p>
        </section>

        <section>
          <h2>3. Hosting und Server-Logfiles</h2>
          <p>Diese Website wird bei Vercel gehostet.</p>
          <p>
            Anbieter ist Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
            United States.
          </p>
          <p>
            Beim Aufruf dieser Website verarbeitet Vercel automatisch technische
            Zugriffsdaten in Server-Logfiles. Dazu können insbesondere IP-Adresse,
            Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browser, Betriebssystem
            und technische Diagnoseinformationen gehören.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse
            liegt in der sicheren, stabilen und zuverlässigen Bereitstellung dieser
            Website.
          </p>
        </section>

        <section>
          <h2>4. Kontaktaufnahme per E-Mail</h2>
          <p>
            Wenn Sie per E-Mail Kontakt aufnehmen, werden die von Ihnen übermittelten
            Daten verarbeitet, um Ihre Anfrage zu bearbeiten.
          </p>
        </section>

        <section>
          <h2>5. Cookies und externe Dienste</h2>
          <p>
            Diese Website verwendet derzeit keine Analyse-, Marketing- oder
            Tracking-Cookies und keine externen Trackingdienste wie Google Analytics
            oder Meta Pixel.
          </p>
        </section>

        <section>
          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen Rechte auf
            Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit, Widerspruch sowie Widerruf einer erteilten
            Einwilligung.
          </p>
          <p>Zur Ausübung Ihrer Rechte: info.klexstudios@gmail.com</p>
        </section>

        <section>
          <h2>7. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
            beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
            personenbezogenen Daten gegen die DSGVO verstößt.
          </p>
        </section>

        <section>
          <h2>8. Aktualität</h2>
          <p>Stand: Mai 2026</p>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h2>1. Controller</h2>
        <p>The controller responsible for the processing of personal data on this website is:</p>
        <p>
          Kimi Kempe
          <br />
          Schlickelder Straße 294
          <br />
          49479 Ibbenbüren
          <br />
          Germany
        </p>
        <p>E-mail: info.klexstudios@gmail.com</p>
      </section>

      <section>
        <h2>2. General Information on Data Processing</h2>
        <p>
          This website is used to present Klex Studios and its related app projects.
          When you visit this website, personal data may be processed.
        </p>
      </section>

      <section>
        <h2>3. Hosting and Server Log Files</h2>
        <p>This website is hosted by Vercel.</p>
        <p>
          Provider: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
          United States.
        </p>
        <p>
          When this website is accessed, Vercel may automatically process technical
          access data in server log files, including IP address, date and time of
          access, accessed page, browser, operating system and technical diagnostics.
        </p>
      </section>

      <section>
        <h2>4. Contact by E-mail</h2>
        <p>
          If you contact us by e-mail, the data you provide will be processed in order
          to handle your request.
        </p>
      </section>

      <section>
        <h2>5. Cookies and External Services</h2>
        <p>
          This website currently does not use analytics, marketing, or tracking cookies
          and does not use external tracking services such as Google Analytics or Meta Pixel.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>
          Within the scope of applicable law, you may have rights of access,
          rectification, erasure, restriction of processing, data portability, objection,
          and withdrawal of consent.
        </p>
        <p>To exercise your rights, contact: info.klexstudios@gmail.com</p>
      </section>

      <section>
        <h2>7. Right to Lodge a Complaint</h2>
        <p>
          You have the right to lodge a complaint with a competent data protection
          supervisory authority if you believe that the processing of your personal data
          violates the GDPR.
        </p>
      </section>

      <section>
        <h2>8. Updates</h2>
        <p>Last updated: May 2026</p>
      </section>
    </>
  );
}
