// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Basics of programming!',
  tagline: 'Welcome to the course materials!',
  favicon: '/img/favicon-utu.png',

  // Set the production url of your site here
  url: 'https://gitlab.utu.fi',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ohpe-test-site/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'njmett', // Usually your GitHub org/user name.
  projectName: 'ohpe-test-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/UTU_logo_EN_RGB.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Course Material site',
        logo: {
          alt: 'UTU Logo',
          src: 'img/UTU_logo_EN_RGB.png',
          srcDark: 'img/UTU_logo_EN_RGB_white.png',
        },
        items: [
          {
            to: 'docs/Week1-Intro-to-programming/intro-programming-and-code',
            position: 'left',
            label: 'Material',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'UTU Logo',
          src: 'img/UTU_logo_EN_RGB.png',
          srcDark: 'img/UTU_logo_EN_RGB_white.png',
          height: 100,
          width: 260
        },
        copyright: `Copyright © ${new Date().getFullYear()} Turun Yliopisto.`,
        links: [
          {
            label: 'ViLLE',
            href: 'https://ville.utu.fi',
          },
          {
            label: 'Open Programming Courses',
            href: 'https://www.utu.fi/en/open-university-studies/courses/programming-and-databases',
          },
          {
            label: 'UTU Website',
            href: 'https://www.utu.fi/',
          },
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;
