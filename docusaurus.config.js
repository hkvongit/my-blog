// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hari's world",
  tagline: "Life is beautiful and I love my dear ones.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://my-blog-pu0.pages.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "", // Usually your GitHub org/user name.
  projectName: ``, // Usually your repo name.

  onBrokenLinks: "throw",
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
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          { to: "/404.html", label: "Home", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/404.html", label: "Works", position: "left" },
          { to: "/404.html", label: "Design Library", position: "left" },
          {
            href: "https://github.com/hkvongit",
            label: "My GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Content",
            items: [
              { to: "/404.html", label: "Home" },
              { to: "/blog", label: "Blog" },
              { to: "/404.html", label: "Works" },
              { to: "/404.html", label: "Design Library" },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "Linked In",
                to: "https://www.linkedin.com/in/harikrishnan-hkv-844700000/",
              },
              {
                label: "Instagram",
                to: "https://www.instagram.com/hkv_anitha",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/hkvanitha",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                to: "https://github.com/hkvongit",
              },
              {
                label: "Whatsapp",
                to: "https://wa.me/+91-9496395582",
              },
              {
                label: "hari.odessey@gmail.com",
                to: "mailto:hari.odessey@gmail.com",
              },
              {
                label: "+91 94963 95582",
                to: "tel:+91-94963-95582",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Harikrishnan. Built with <a href="https://docusaurus.io/docs/3.4.0" target="_blank">Docusaurus</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  stylesheets: [
    "/custom-css/navbar.css",
    "/custom-css/footer.css",
    "/custom-css/article.css",
    "/custom-css/fonts.css",
  ],
};

export default config;
