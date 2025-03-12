// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Psych Engine - Lua Script API",
  favicon: "img/icon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "", // Usually your GitHub org/user name.
  projectName: "psych engine lua api", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      announcementBar: {
        id: "newsite",
        content: "This site is super super super WIP",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "Psych Engine - Lua Script API",
        logo: {
          alt: "Psych Engine",
          src: "img/icon.ico",
        },
        items: [
          {
            type: "doc",
            docId: "running",
            position: "left",
            label: "Running a Script",
          },
          {
            type: "doc",
            position: "left",
            docId: "/category/functions",
            label: "Functions",
          },
          {
            type: "dropdown",
            position: "left",
            label: "Other Pages",
            items: [
              {
                label: "Variables",
                href: "https://www.facebook.com",
              },
              {
                label: "Code Snippets",
                href: "https://www.facebook.com",
              },
            ],
          },
          {
            href: "https://github.com/ShadowMario/FNF-PsychEngine",
            label: "Psych Engine Source",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/2ka77eMXDv",
              },
              {
                label: "X",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Psych Engine. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["lua"],
      },
    }),
};

export default config;
