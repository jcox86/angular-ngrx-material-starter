// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../package.json');

export const environment = {
  appName: 'SLO Starter',
  envName: 'LOCAL',
  production: false,
  test: false,
  i18nPrefix: '',
  apiRoute: '',
  sourceControlLink: 'http://tfs2017:8080/tfs/CJIS/CJIS/CJIS%20Team/_versionControl?path=%24%2FCJIS%2FDev%2FSustEng%2Fsrc',
  versions: {
    app: packageJson.version
  }
};
