const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO Starter',
  envName: 'TEST',
  production: false,
  test: true,
  i18nPrefix: '',
  apiRoute: '',
  sourceControlLink: 'http://tfs2017:8080/tfs/CJIS/CJIS/CJIS%20Team/_versionControl?path=%24%2FCJIS%2FDev%2FSustEng%2Fsrc',
  versions: {
    app: packageJson.version
  }
};
