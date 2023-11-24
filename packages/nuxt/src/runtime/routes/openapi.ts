import { defineEventHandler } from 'h3';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(() => {
  const { openApi } = useRuntimeConfig();
  // console.log(openApi);

  return {
    openapi: "3.0.3",
    info: {
      title: "Nitro Server Routes",
      version: "0.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Development Server",
        variables: {},
      },
    ],
    tags: [
      {
        name: 'api',
        description: "API"
      }
    ],
    paths: openApi.paths,
  };
});
