import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import styled from "styled-components";
import { Hero } from "../components/Hero";

const cards = [
  {
    title: `How it works`,
    imageUrl: "img/how-it-works.svg",
    description: (
      <>
        Uncover the simplicity that follows from building software locally,
        employing it locally, and maintaining it locally.
      </>
    ),
    to: "/docs/about/introduction",
  },
  {
    title: "The five principles",
    imageUrl: "img/five-principles.svg",
    description: (
      <>
        Meet the design principles that guide you towards building resilient and
        cooperative software systems.
      </>
    ),
    to: "/docs/principles/introduction",
  },
  {
    title: "The resilience community",
    imageUrl: "img/community.svg",
    description: (
      <>
        Become part of the effort to make humankind’s use of computers as robust
        as it should be.
      </>
    ),
    to: "/docs/community/get-involved",
  },
];

const testimonials = [
  {
    name: `Peter van Hardenberg`,
    title: `Director @ Ink&Switch`,
    imageUrl: "img/people/peter.jpg",
    quote: (
      <>
        Software today is not fit to entrust our most valuable ideas. The cloud
        is too often unavailable in our sheds, workshops, and kitchens. Creative
        projects too often outlast the SaaS software that hosts them. Our tools
        for thought will inevitably become local-first.
      </>
    ),
  },
  {
    name: `Dr. Roland Kuhn`,
    title: `Founder @ Actyx`,
    imageUrl: "img/people/roland.jpg",
    quote: (
      <>
        We are currently putting all eggs in too few huge baskets: the internet
        and our usage of computers are very scalable but not resilient.
        Therefore we need to focus on solving local problems with local
        infrastructure, local-first and cooperative.
      </>
    ),
  },
  {
    name: `Jonas Bonér`,
    title: `Founder @ Lightbend`,
    imageUrl: "img/people/jonas.jpg",
    quote: (
      <>
        I’ve always been interested in autonomous components and how they work
        together, mimicking nature. We can improve ourselves and society by
        building software this way.
      </>
    ),
  },
  {
    name: `Tyler Jewell`,
    title: `Managing Director @ Dell Technologies Capital`,
    imageUrl: "img/people/tyler.jpeg",
    quote: (
      <>
        We need edge computing and super-low latency to make IoT work — and for
        those we need a unified programming paradigm instead of proprietary
        niche approaches.
      </>
    ),
  },
];

const useCases = [
  {
    name: "Collaborative docs",
    description: "Work together on documents with others",
    imageUrl: `img/docs.svg`,
    to: "/docs/use-cases/collaborative-documents",
  },
  {
    name: "Factory automation",
    description: "Automate manufacturing processes",
    imageUrl: `img/factory-automation.svg`,
    to: "/docs/use-cases/factory-automation",
  },
  {
    name: "Field workers",
    description: "Work together to maintain equipment",
    imageUrl: `img/factory-worker.svg`,
    to: "/docs/use-cases/field-workers",
  },
  {
    name: "Games in LAN",
    description: "Play in the LAN, with ultimate performance",
    imageUrl: `img/lan-gaming.svg`,
    to: "/docs/use-cases/games-in-lan",
  },
  {
    name: "Hospital",
    description: "Digitize patient care, with 100% resilience",
    imageUrl: `img/hospital.svg`,
    to: "/docs/use-cases/hospital",
  },
  {
    name: "Local information",
    description: "Not quite sure what this is, so just cool",
    imageUrl: `img/local-info.svg`,
    to: "/docs/use-cases/local-information",
  },
  {
    name: "Smart home",
    description: "Automate your home, whilst staying in control",
    imageUrl: `img/smart-home.svg`,
    to: "/docs/use-cases/smart-home",
  },
  {
    name: "Social network",
    description: "Share with friends and familiy, with agency",
    imageUrl: `img/social-network.svg`,
    to: "/docs/use-cases/social-network",
  },
];

const Card = ({ imageUrl, title, description, to }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      <div
        className={clsx("card", "shadow--lw", styles.card)}
        onClick={() => window.location.assign(to)}
      >
        {imgUrl && (
          <div>
            <img className={styles.cardImage} src={imgUrl} alt={title} />
          </div>
        )}
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a href={to}>Learn more</a>
        </div>
      </div>
    </div>
  );
};

const Testimonial = ({ imageUrl, name, title, quote }) => (
  <div className="col col--4">
    <div className={clsx("avatar avatar--vertical", styles.avatar)}>
      <img
        className={clsx(
          "avatar__photo",
          "avatar__photo--xl",
          styles.testimonialImage
        )}
        src={imageUrl}
      />
      <div className="avatar__intro">
        <h4 className="avatar__name">{name}</h4>
        <small className="avatar__subtitle">{title}</small>
        <small className={clsx("avatar__subtitle", styles.testimonialQuote)}>
          {quote}
        </small>
      </div>
    </div>
  </div>
);

const UseCase = ({ name, description, imageUrl, to }) => (
  <div className="col col--3">
    <div className={clsx("card", "shadow--lw", styles.useCase)}>
      <div>
        <img className={styles.useCaseImage} src={imageUrl} alt={name} />
      </div>
      <div className="card__header">
        <h4>{name}</h4>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <a href={to}>Learn more</a>
      </div>
    </div>
  </div>
);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Local-First Cooperation - Build apps for people you care about"
    >
      <header className={clsx("hero", "hero--primary", styles.heroBanner)}>
        <div className="container">
          <Hero />
        </div>
      </header>
      <main>
        <section className={styles.cards}>
          <div className="container">
            <div className="row">
              {cards.map((props, idx) => (
                <Card key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.testimonials}>
          <div className="container">
            <div className="row">
              {testimonials.map((props, idx) => (
                <Testimonial key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.useCases}>
          <div className="container">
            <div className="row">
              <h2 className={styles.useCasesTitle}>
                Discover real world use-cases
              </h2>
            </div>
            <div className="row">
              <p>
                See how Local-First Cooperation applies to a wide range of
                use-cases.
              </p>
            </div>
            <div className="row">
              {useCases.map((props, idx) => (
                <UseCase key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
