import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from '@docusaurus/Head';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    
    <Layout
      title={siteConfig.title}
      description="Psych Engine Lua Docs"
    >
      <Head>
        <meta property="og:title" content="Psych Engine Lua Docs" />
        <meta property="og:description" content="Welcome to the Psych Engine Lua Docs!" />
        <meta property="og:image" content="static/img/logo.png" />
        <meta property="og:url" content="https://psych-engine-api.netlify.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psych Engine Lua Docs" />
        <meta name="twitter:description" content="Welcome to the Psych Engine Lua Docs!" />
        <meta name="twitter:image" content="static/img/logo.png" />
      </Head>
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <img
            src="/img/logo.png"
            alt="Logo"
            className={styles.bannerImage}
          />
          <p className="hero__subtitle">
            Welcome to the Psych Engine Lua Docs!
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/running"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/functions"
            >
              Functions
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h1>Home Page</h1>
          <p>
            These pages are intended for Psych Engine 1.0+, so it might not be
            reliable for older versions. Support for other versions has been
            abandoned and will not be added to these pages.
          </p>
          <h1>Downloads</h1>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/ShadowMario/FNF-PsychEngine/releases"
            >
              Github
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://gamebanana.com/mods/309789"
            >
              GameBanana
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
