const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO County Starter',
  envName: 'DEV',
  production: false,
  test: false,
  i18nPrefix: '/slo-county-starter',
  versions: {
    app: packageJson.version
  }
};
