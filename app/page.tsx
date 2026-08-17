import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ernests Smaliķis — I participate.",
  description:
    "The interface to whoever the fuck Ernests Smaliķis is becoming.",
};

const labels = [
  "Engineer", "Founder", "Soldier", "Volunteer", "Latvian", "Warehouse worker",
  "Writer", "Systems", "Logistics", "Community", "Ambition", "Failure",
  "Discipline", "Curiosity",
];

const worlds = [
  ["01", "BUILD", "Software. Products. Systems. Experiments."],
  ["02", "LUCENEX", "Operational systems for the physical world."],
  ["03", "SERVE", "Responsibility, discipline, and showing up."],
  ["04", "CONTRIBUTE", "Communities do not run on vibes alone."],
  ["05", "CREATE", "Things that are still becoming real."],
  ["06", "THINK", "Notes from trying to become less stupid."],
  ["07", "NOW", "What has my attention right now."],
];

export default function Home() {
  return (
    <main>
      <section className="arrival" aria-labelledby="arrival-title">
        <div className="grain" aria-hidden="true" />
        <div className="coordinates" aria-hidden="true"><span>56.9496° N</span><span>24.1052° E</span><span>LV / 001</span></div>
        <div className="orbital-system" aria-hidden="true">
          <i className="orbit orbit-a" /><i className="orbit orbit-b" />
          <i className="marker marker-a" /><i className="marker marker-b" /><i className="marker marker-c" />
          <i className="plane plane-a" /><i className="plane plane-b" /><i className="signal signal-a" />
        </div>
        <p className="eyebrow">Hello. I&apos;m</p>
        <h1 id="arrival-title">ERNESTS<br />SMALIĶIS</h1>
        <p className="question">Who the fuck is that?</p>
        <div className="label-field" aria-label="The labels that describe Ernests">
          {labels.map((label, index) => <span className={`label label-${index + 1}`} key={label}>{label}</span>)}
        </div>
        <div className="arrival-footer">
          <p>Labels are useful until they start hiding the person.</p>
          <a href="#interface" className="enter-link"><span>Enter the interface</span><b aria-hidden="true">↘</b></a>
        </div>
      </section>

      <section className="statement" id="interface" aria-labelledby="statement-title">
        <div className="section-index">00 / THE POINT</div>
        <div className="statement-copy">
          <p className="display-line">I build things.</p>
          <p className="display-line muted">Software. Companies. Systems.</p>
          <p className="display-line muted">Occasionally problems for myself.</p>
          <h2 id="statement-title">I participate.</h2>
          <p className="body-copy">This is not an archive of Ernests Smaliķis. It is the interface to whoever the fuck I am becoming.</p>
        </div>
      </section>

      <section className="world-index" aria-labelledby="worlds-title">
        <div className="world-index-heading"><div><p className="eyebrow">Explore the parts</p><h2 id="worlds-title">THE WORLDS</h2></div><p className="body-copy">Not a navigation bar. A map of what I keep getting involved in.</p></div>
        <div className="world-list">
          {worlds.map(([number, name, description]) => <a href={`#${name.toLowerCase()}`} className="world" key={name}><span className="world-number">{number}</span><span className="world-name">{name}</span><span className="world-description">{description}</span><span className="world-arrow" aria-hidden="true">↗</span></a>)}
        </div>
      </section>

      <section className="closing" aria-label="Closing statement"><p className="eyebrow">Status: unfinished</p><p>THE INTERESTING SHIT<br />HOPEFULLY HASN&apos;T HAPPENED YET.</p></section>
    </main>
  );
}
