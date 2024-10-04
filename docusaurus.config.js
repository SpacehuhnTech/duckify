// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Duckify',
  tagline: 'BadUSB Script Converter',
  url: 'https://duckify.huhn.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'logo512.png',
  organizationName: 'spacehuhntech', // Usually your GitHub org/user name.
  projectName: 'duckify', // Usually your repo name.

  scripts: [{src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'duckify.huhn.me'}],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/spacehuhntech/duckify/blob/main/',
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Duckify',
        logo: {
          alt: 'Duckify Logo',
          src: 'logo512.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://huhn.me',
            label: 'More Tools',
            position: 'right',
          },
        ],
      },
      /*footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/spacehuhntech/duckify',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spacehuhn Technologies. Built with Docusaurus.`,
      },*/
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: 'description', content: 'Convert Bad USB Script into Arduino code using this free and Open-Source web-app.' },
        { name: 'keywords', content: 'DuckyScript, Ducky, Script, BadUSB, Digispark, converter, Arduino, Spacehuhn' },
        { name: 'author', content: 'Spacehuhn' },
      ],
      image: '/img/thumbnail.jpg',
    }),
};

module.exports = config;
