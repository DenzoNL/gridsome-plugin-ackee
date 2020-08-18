import Ackee from './ackee';

export default function (Vue, options, { router }) {
  if (process.isClient) {
    Vue.use(Ackee, {
      router,
      server: options.domain,
      domainId: options.domainId,
    });
  }
}