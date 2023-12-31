import clickOutsideDirective from './clickOutside'

export default {
  install(app) {
    app.directive('clickOutside', clickOutsideDirective)
  }
}
