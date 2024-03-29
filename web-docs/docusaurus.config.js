// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const ScDocusaurusConfig = require('./ScDocusaurusConfig');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ScDocusaurusConfig.title,
  tagline: ScDocusaurusConfig.description,
  url: 'https://hms-networks.github.io',
  baseUrl: ScDocusaurusConfig.repoName + '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: ScDocusaurusConfig.organizationName, // Usually your GitHub org/user name.
  projectName: ScDocusaurusConfig.repoName, // Usually your repo name.
  deploymentBranch: "gh-pages",

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Plugins
  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // Imported documents
        name: "imported-docs",
        sourceBaseUrl: ScDocusaurusConfig.commonDocsRepoUrl + 'docs/',
        outDir: "docs/imported",
        documents: [
          "setup/_configuration.mdx",
          "setup/_installation_or_upgrade.mdx",
          "sys_req/_sys_req_ewon_fw.mdx",
          "sys_req/_sys_req_java.mdx",
          "sys_req/_sys_req_maven.mdx",
        ],
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Imported images
        name: "imported-images",
        sourceBaseUrl: ScDocusaurusConfig.commonDocsRepoUrl + 'img',
        outDir: "static/img/imported",
        documents: [
          "ewon/pages/ewon-tag-config-page-hist-logging.webp",
          "ewon/pages/ewon-web-page-home.webp",
          "ewon/setup/add-tag.gif",
          "ewon/setup/modify-tag.gif",
          "github/github-code-btn-download-zip.webp",
          "graphics/green-check-icon-cc0v1.webp",
          "hms/hms-logo-rgb.webp"
        ],
        requestConfig: { responseType: "arraybuffer" }
      }
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // Imported javascript
        name: "imported-js",
        sourceBaseUrl: ScDocusaurusConfig.commonDocsRepoUrl + 'js',
        outDir: "src/components/imported",
        documents: [
          "highlight.js",
          "popover.js"
        ],
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl: ScDocusaurusConfig.repoUrl
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
        title: ScDocusaurusConfig.title,
        logo: {
          alt: 'HMS Networks Logo',
          src: 'img/hms-logo-rgb.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: ScDocusaurusConfig.repoLatestReleaseUrl,
            position: 'left',
            label: 'Download',
          },
          {
            href: ScDocusaurusConfig.repoUrl,
            position: 'left',
            label: 'Source Code',
          },
          {
            href: 'https://hms-networks.com',
            position: 'right',
            label: 'HMS Networks',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Flexy',
            items: [
              {
                label: 'Product Page',
                href: 'https://www.ewon.biz/products/ewon-flexy'
              },
              {
                label: 'Support',
                href: 'https://www.ewon.biz/technical-support/support-home/select-your-ewon-devices',
              },
            ],
          },
          {
            title: 'Talk2M',
            items: [
              {
                label: 'Login',
                href: 'https://m2web.talk2m.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HMS Networks Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
