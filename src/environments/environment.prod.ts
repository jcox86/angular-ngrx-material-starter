const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO County Starter',
  envName: 'PROD',
  production: true,
  test: false,
  i18nPrefix: '/slo-county-starter',
  versions: {
    app: packageJson.version
  }
};
