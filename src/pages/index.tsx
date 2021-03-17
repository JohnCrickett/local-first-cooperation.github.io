import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import styled from 'styled-components';

const cards = [
  {
    title: `How it works`,
    imageUrl: 'img/plant.svg',
    description: (
      <>
        Uncover the simplicity that follows from building software locally, employing it locally, and maintaining it locally.
      </>
    ),
    to: '/docs/about/introduction',
  },
  {
    title: 'The five principles',
    imageUrl: 'img/act.svg',
    description: (
      <>
        Meet the design principles that guide you towards building resilient and cooperative software systems.
      </>
    ),
    to: '/docs/principles/introduction',
  },
  {
    title: 'The resilience community',
    imageUrl: 'img/user.svg',
    description: (
      <>
        Become part of the effort to make humankind’s use of computers as robust as it should be.
      </>
    ),
    to: '/docs/community/get-involved',
  },
];

const testimonials = [
  {
    name: `Dr. Martin Kleppmann`,
    title: `Professor @ Cambridge`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/hector-ramos.28a5b05.200.jpg',
    quote: (
      <>
        TODO (also the photograph)
      </>
    ),
  },
  {
    name: `Adam Wiggins`,
    title: `Founder @ Heroku`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/ricky-vetter.d899907.200.jpg',
      quote: (
        <>
          TODO (also the photograph)
        </>
      ),
    },
  {
    name: `Peter van Hardenberg`,
    title: `Director @ Ink&Switch`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/christopher-chedeau.0290f26.200.jpg',
      quote: (
        <>
          TODO (also the photograph)
        </>
      ),
    },
  {
    name: `Ben Christensen`,
    title: `Software Engineer @ Facebook`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/hector-ramos.28a5b05.200.jpg',
    quote: (
      <>
        TODO (also the photograph)
      </>
    ),
  },
  {
    name: `Adrian Colyer`,
    title: `Venture Partner @ Accel`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/ricky-vetter.d899907.200.jpg',
      quote: (
        <>
          TODO (also the photograph)
        </>
      ),
    },
  {
    name: `Dr. Roland Kuhn`,
    title: `Founder @ Actyx`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/christopher-chedeau.0290f26.200.jpg',
      quote: (
        <>
          TODO (also the photograph)
        </>
      ),
    },
  {
    name: `Jonas Bonér`,
    title: `Founder @ Lightbend`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/hector-ramos.28a5b05.200.jpg',
    quote: (
      <>
        TODO (also the photograph)
      </>
    ),
  },
  {
    name: `Tyler Jewell`,
    title: `Managing Director @ Dell Technologies Capital`,
    imageUrl:
      'https://v2.docusaurus.io/assets/ideal-img/ricky-vetter.d899907.200.jpg',
      quote: (
        <>
          TODO (also the photograph)
        </>
      ),
  },
];

const useCases = [
  {
    name: 'Collaborative docs',
    description: 'Work together on documents with others',
    imageUrl: `img/docs.svg`,
    to: '/docs/use-cases/collaborative-documents',
  },
  {
    name: 'Factory automation',
    description: 'Automate manufacturing processes',
    imageUrl: `img/robotic-arm.svg`,
    to: '/docs/use-cases/factory-automation',
  },
  {
    name: 'Field workers',
    description: 'Work together to maintain equipment',
    imageUrl: `img/worker.svg`,
    to: '/docs/use-cases/field-workers',
  },
  {
    name: 'Games in LAN',
    description: 'Play in the LAN, with ultimate performance',
    imageUrl: `img/gamepad.svg`,
    to: '/docs/use-cases/games-in-lan',
  },
  {
    name: 'Hospital',
    description: 'Digitize patient care, with 100% resilience',
    imageUrl: `img/hospital-bed.svg`,
    to: '/docs/use-cases/hospital',
  },
  {
    name: 'Local information',
    description: 'Not quite sure what this is, so just cool',
    imageUrl: `img/information.svg`,
    to: '/docs/use-cases/local-information',
  },
  {
    name: 'Smart home',
    description: 'Automate your home, whilst staying in control',
    imageUrl: `img/house.svg`,
    to: '/docs/use-cases/smart-home',
  },
  {
    name: 'Social network',
    description: 'Share with friends and familiy, with agency',
    imageUrl: `img/network.svg`,
    to: '/docs/use-cases/social-network',
  },
];

const Card = ({ imageUrl, title, description, to }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      <div className={clsx('card', 'shadow--lw', styles.card)} onClick={() => window.location.assign(to)} >
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
    <div className="avatar avatar--vertical">
      <img
        className={clsx(
          'avatar__photo',
          'avatar__photo--xl',
          styles.testimonialImage
        )}
        src={imageUrl}
      />
      <div className="avatar__intro">
        <h4 className="avatar__name">{name}</h4>
        <small className="avatar__subtitle">{title}</small>
        <small className={clsx('avatar__subtitle', styles.testimonialQuote)}>
          {quote}
        </small>
      </div>
    </div>
  </div>
);

const UseCase = ({ name, description, imageUrl, to }) => (
  <div className="col col--3">
    <div className={clsx('card', 'shadow--lw', styles.useCase)}>
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
      <header className={clsx('hero', 'hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.heroLogo} src="/img/logo-full-on-blue.png" />
          <h1 className="hero__title">Build apps for people you care about</h1>
          <p className="hero__subtitle">
            You can build collaborative applications for your friends, family, or customers.
            These applications can work together with other computing devices — from smart home to factory automation.
            And you can do all of this <i>without using the cloud</i>.
          </p>
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
