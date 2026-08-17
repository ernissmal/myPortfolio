import type { Metadata } from "next";
import { worlds } from "./world-data";

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
          {worlds.map((world) => <a href={`#${world.slug}`} className="world" key={world.slug}><span className="world-number">{world.number}</span><span className="world-name">{world.name}</span><span className="world-description">{world.deck}</span><span className="world-arrow" aria-hidden="true">↓</span></a>)}
        </div>
      </section>

      <section className="chapter-intro" aria-label="World chapters introduction">
        <p className="eyebrow">Keep going</p>
        <p>There is no menu hiding the person. There is only the trail.</p>
      </section>

      <div className="world-chapters">
        {worlds.map((world) => (
          <section className="world-chapter" id={world.slug} key={world.slug} aria-labelledby={`${world.slug}-title`}>
            <div className="chapter-rules" aria-hidden="true"><span>{world.number} / 07</span><span>{world.eyebrow}</span></div>
            <div className="chapter-main">
              <p className="eyebrow">{world.eyebrow}</p>
              <h2 id={`${world.slug}-title`}>{world.name}</h2>
              <p className="chapter-deck">{world.deck}</p>
            </div>
            <div className="chapter-reading">
              <blockquote>{world.thesis}</blockquote>
              {world.passages.map((passage) => <p key={passage}>{passage}</p>)}
              {world.boundary && <aside>{world.boundary}</aside>}
            </div>
            <div className="chapter-signal"><span>Live signal</span><p>{world.signal}</p></div>
          </section>
        ))}
      </div>

      <section className="closing" aria-label="Closing statement"><p className="eyebrow">Status: unfinished</p><p>THE INTERESTING SHIT<br />HOPEFULLY HASN&apos;T HAPPENED YET.</p></section>
    </main>
  );
}
