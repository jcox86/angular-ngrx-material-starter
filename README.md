# SLO  Starter 

## Getting started
```bash
download project from TFS
cd new-project
npm install
npm start
```

## Useful Commands
  * `npm start` - starts a local server and opens browser with running app
  * `npm start:<env>` - starts a server with a certain `environment` and opens browser with running app
  * `npm run build` - builds/bundles the app with in your local `environment`
  * `npm run build:<env>` - builds/bundles the app with in the specified `environment`
  * `npm run deploy:<env>` - builds a deployment package with the specified `environment`
  * `npm run test` - runs lint and tests
  * `npm run watch` - runs tests in watch mode
  * `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application) 

## Make It Your Own
When using this starter project to build your own app you might consider some of the following steps:
  
  * rename project in `package.json`; `name` property and set appropriate version (eg `0.0.0` or `1.0.0`)
  * change project name and description tags in `src/index.html` to appropriate versions
  * rename app in `src/environments/` files (will be shown in browser tab)
  * define api routes, tfs links in `src/environments/` files
  * remove the toasts from the `app.component.ts` or replace with your own
  * use `search and replace` to change `slo-starter` to `<your-app-name>`
  * use `search and replace` to change `SLO Starter` to `Your App Name`
  * replace logo in `src/assets` folder ( currently 128 x 128 pixel `png` file )
  * adjust colors in `src/themes/default-theme.scss`

#### Theming 

  * [Blog post](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)
  * [Presentation (Slides)](http://slides.com/tomastrajan/angular-material-themes-guide#/)
  * [Themeing your Components](https://material.angular.io/guide/theming-your-components)

 
## Features

* custom themes support (4 themes included)
* lazy-loading of feature modules
* automatic logging of router events and api calls, persisted to the Log database on error
* localStorage ui state persistence
* `@ngrx/effects` for API requests
* fully responsive design
* angular-material and dev-extreme components in `SharedModule`
 
## Stack

* Angular
* ngrx (or try [ngx-model](https://github.com/tomastrajan/ngx-model) if you prefer less boilerplate)
* Angular Material
* DevExtreme [Demos](https://js.devexpress.com/Demos/WidgetsGallery/)
