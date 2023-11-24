import {
  defineNuxtModule,
} from '@nuxt/kit';
export default defineNuxtModule({
  meta: {
    name: 'nuxt-swagger',
    configKey: 'swagger',
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  async setup (options, nuxt) {
    console.log('[nuxt-swagger] Module correctly loaded.');
  },
});
