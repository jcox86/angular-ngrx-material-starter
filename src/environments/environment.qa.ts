const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO County Starter',
  envName: 'QA',
  production: true,
  test: false,
  i18nPrefix: '/slo-county-starter',
  versions: {
    app: packageJson.version
  }
};
