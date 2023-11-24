import {
  addServerHandler,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit';

import { scanOpenApiPaths } from './scan';

export default defineNuxtModule({
  meta: {
    name: 'nuxt-swagger',
    configKey: 'swagger',
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addServerHandler({
      handler: resolve('./runtime/routes/openapi'),
      route: '/openapi.json',
    });
    addServerHandler({
      handler: resolve('./runtime/routes/swagger'),
      route: '/swagger',
    });

    const paths = await scanOpenApiPaths(nuxt.options.serverDir);
    nuxt.options.runtimeConfig.openApi = { paths };
  },
});
