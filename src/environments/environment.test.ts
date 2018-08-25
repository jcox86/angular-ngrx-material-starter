const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO  Starter',
  envName: 'TEST',
  production: false,
  test: true,
  i18nPrefix: '',
  versions: {
    app: packageJson.version
  }
};
