function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  if (!license) return '';

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `## License

This project is licensed under the ${license} license. ${badge}

For more information, see [${license} license](${link}).`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;