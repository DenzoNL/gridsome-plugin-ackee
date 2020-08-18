import * as ackeeTracker from 'ackee-tracker'

export default {
  install(Vue, { router, server, domainId }) {
    if (!document) return;

    Vue.prototype.$ackee = ackeeTracker.create({
      server,
      domainId,
    }, {
      ignoreLocalhost: false,
    });

    router.afterEach((to, from) => {
      Vue.prototype.$ackee.record();
    })
  }
}