import angular          from 'angular';
import uiRouter         from 'angular-ui-router';
import ocLazyLoad       from 'oclazyload'
import material         from 'angular-material';

import appConfigRoutes  from './app.config.routes';
import Pages            from './pages/pages';
import AppComponent     from './app.component';

import 'angular-material/angular-material.min.css';

angular.module('app', [
  uiRouter,
  ocLazyLoad,
  material,
  Pages
  ])
  .config(appConfigRoutes)
  .component('app', AppComponent);
