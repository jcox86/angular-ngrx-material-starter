const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO  Starter',
  envName: 'PROD',
  production: true,
  test: false,
  i18nPrefix: '/slo-starter',
  apiRoute: '',
  versions: {
    app: packageJson.version
  }
};
