const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO  Starter',
  envName: 'QA',
  production: true,
  test: false,
  i18nPrefix: '/slo-starter',
  versions: {
    app: packageJson.version
  }
};
