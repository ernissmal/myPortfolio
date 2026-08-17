# Ernests Smaliķis — Website Foundation

## Status

**Confirmed direction.** This document captures the decisions made before implementation. It is the source of truth for the public website repository until explicitly revised.

## The purpose

This is not a conventional portfolio or a static monument to past work.

It is the interface to who Ernests Smaliķis is becoming: a living, honest record of the systems he builds, the environments he participates in, the things he gets wrong, and the work that is still unfinished.

The intended visitor response is not "he looks impressive." It is: **"I understand this guy."**

## The central idea

The website answers one question:

> Who the fuck is Ernests Smaliķis?

Labels are useful but incomplete. Engineer, founder, soldier, volunteer, Latvian, warehouse worker, writer, entrepreneur, and systems thinker are all true, but none alone is the answer.

The connecting pattern is participation: seeing a problem, questioning the model behind it, getting involved, building or changing something, learning from reality, and iterating.

## Voice

The writing is direct, human, self-aware, ambitious, and evidence-led. It may be funny, technical, serious, philosophical, blunt, or unfinished.

Profanity is allowed when it carries the actual thought. It must never be used as a decorative "edgy" brand device. The objective is an authentic voice, not a fake punk-startup aesthetic.

The site does not use corporate language to flatten contradictions. Ernests can be structured and spontaneous, analytical and emotional, commercially ambitious and community-minded, serious about competence and capable of being very unserious. These are not brand problems; they are the person.

## Product principles

1. **Experience before brochure.** Visitors explore parts of a life and body of work instead of scanning a standard personal-site navigation.
2. **Evidence before claims.** Real artifacts carry the work: photos, code, screenshots, maps, diagrams, notes, prototypes, timelines, and writing.
3. **Reality before polish.** Show changing directions, unfinished experiments, failures, and revised thinking where useful.
4. **Coherence, not artificial consistency.** The worlds of the site can differ while still belonging to one person.
5. **Substance over effects.** Motion and interaction reveal meaning, hierarchy, or connection; they are never filler.
6. **Accessible by default.** The story, content, navigation, and meaning work without JavaScript or motion.

## Opening experience

The homepage begins as a full-screen, almost confrontational arrival:

```text
ERNESTS SMALIĶIS

WHO THE FUCK IS THAT?

ENGINEER · FOUNDER · SOLDIER · VOLUNTEER · LATVIAN
PROGRAMMER · ENTREPRENEUR · WAREHOUSE WORKER · WRITER
SYSTEMS · LOGISTICS · COMMUNITY · PSYCHOLOGY
AMBITION · FAILURE · DISCIPLINE · CURIOSITY
```

Labels accumulate, collide, and begin to obscure the name. They then clear, leaving:

> Labels are useful until they start hiding the person.

Then:

> I participate.

The entry point leads into the site with the framing thought:

> This is not an archive of Ernests Smaliķis. It is the interface to whoever the fuck I am becoming.

### Hero motion system

The hero uses lightweight HTML and CSS objects rather than video, canvas, or WebGL:

- layered type, grid fragments, cards, rings, lines, and status-like markers;
- CSS gradients and transforms to provide depth;
- slow autonomous movement and restrained pointer response;
- small optional JavaScript only for interaction enhancement;
- `prefers-reduced-motion` support, with paused off-screen motion;
- semantic text and meaningful controls retained beneath the visual layer.

The objects represent labels, projects, ideas, and systems—not random decoration.

## Site worlds

Traditional `About`, `Experience`, `Projects`, and `Contact` are not the primary information architecture. The site is organized as worlds:

| World | Purpose |
| --- | --- |
| `BUILD` | Software, engineering, technical experiments, products, and things built to test an idea. |
| `LUCENEX` | The company, logistics, operational systems, work in progress, lessons, and direction. |
| `SERVE` | Zemessardze, discipline, responsibility, and appropriate parts of military life. Never publish operationally sensitive information. |
| `CONTRIBUTE` | Morfejus, volunteering, community systems, and work where revenue is not the point. |
| `CREATE` | Pasmaidi, emerging projects, prototypes, and ideas that may change or fail. |
| `THINK` | The blog: notes, questions, technical thinking, reversals, mistakes, and ideas in progress. |
| `NOW` | Current focus, active work, open questions, and what has attention right now. |

The resume is a secondary utility: a web-native timeline with a printable/downloadable version, rather than the site’s organising principle.

## Visual direction

The visual character is dark, heavy, structured, sharp, and intentional—with occasional weirdness and humour.

It should suggest a workshop, field notebook, operations room, archive, and evolving personal operating system. It must not resemble a generic founder portrait, a technology-logo wall, a startup landing page, or a dashboard cosplay.

The intensity changes through the journey:

1. The arrival is dense and kinetic.
2. The world index is exploratory and spatial.
3. Project pages become evidence-rich and deliberate.
4. Writing becomes calm, typography-first, and comfortable to read.
5. Contact remains quiet and direct.

## Content model and launch content

Initial public content is versioned local content in this repository. The first launch should not wait for the CMS.

Prioritize:

- the opening narrative;
- a small set of real project/case-study artifacts;
- an initial `NOW` entry;
- one or more genuine pieces of writing;
- an about/identity story distributed across the worlds;
- a concise resume timeline;
- direct contact details and professional links.

Each project should open with the problem, tension, or incorrect assumption—not a technology stack. It should then show the model, decisions, artifacts, results, and what remains unresolved.

## Public-site technical boundary

This repository is a **static website and nothing else**.

- Host on Cloudflare Pages under the existing domain.
- Use Astro, TypeScript, static output, and local Markdown/MDX or content collections for launch content.
- Do not add D1, R2, authentication, a CMS admin area, contact processing, or application-owned secrets here.
- Do not use Cloudflare Pages Functions for site features; future dynamic capabilities are separate Workers.
- The site may call a future public, read-only CMS API through an isolated content adapter. It must never access the CMS database directly.

## Future CMS boundary

The CMS is a different repository and a separate portfolio project.

It will own:

- private editorial/admin interface and authentication;
- Cloudflare Worker API;
- D1 content database;
- optional R2 media storage;
- editorial states and publishing;
- public read-only content endpoints;
- publish events that can trigger a static-site rebuild.

The public site will initially use local content. When the CMS is ready, it will consume a documented public contract such as:

- `GET /v1/projects`
- `GET /v1/projects/:slug`
- `GET /v1/posts`
- `GET /v1/posts/:slug`

Responses must be schema-validated at build time. The integration must not give the public site write access or CMS credentials.

## Deployment and quality plan

Cloudflare Pages is connected to GitHub.

- Pull requests receive automatic preview deployments and remain non-indexed.
- `main` is the production branch and deploys to the custom domain.
- GitHub Actions validates formatting, linting, types, build output, internal links, and core accessibility before merge.
- Later quality gates can add performance budgets and preview-based visual checks.
- Cloudflare Web Analytics is suitable for launch. Add event collection only when a real decision requires it.

The site needs SEO basics from the first release: canonical URLs, per-page titles/descriptions, Open Graph metadata, sitemap, RSS for writing, and a clear social-preview asset.

## Explicit non-goals for the first release

- No CMS integration.
- No backend logic in the site repository.
- No artificial testimonials, metrics, or filler projects.
- No generic "skills" section or framework-logo wall.
- No contact form until a separate Worker and abuse controls are intentionally introduced.
- No performance-heavy decorative media.

## Next implementation sequence

1. Translate this document into route/content structures and a component map.
2. Build the opening hero and the world index as the visual foundation.
3. Build a single representative case-study page and writing page.
4. Complete static content infrastructure, metadata, RSS, sitemap, and responsive behaviour.
5. Connect Cloudflare Pages, custom domain, and pull-request preview workflow.
6. Build the CMS separately when the static site has a stable public content shape.

## Decisions still open

- Final public domain and site title/subtitle.
- Typefaces and exact colour system.
- Which real artifacts can be published immediately.
- The first 3–5 public projects and their boundaries.
- Whether launch content is English-only or bilingual.
- Contact channels to publish at launch.
