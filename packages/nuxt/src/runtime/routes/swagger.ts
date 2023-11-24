/**
 *  Code implementation inspired from Nitro swagger route implementation:
 *  https://github.com/unjs/nitro/blob/c5cfca1e24d5dfa020ada49c2ec00f74e6dbfe0c/src/runtime/routes/swagger.ts
 */

import { defineEventHandler } from 'h3';

const html = (raw: TemplateStringsArray, ...args: unknown[]) => {
  return String.raw({ raw }, ...args);
};

export default defineEventHandler(() => {
  const title = 'Nitro Swagger UI';
  const CDN_BASE = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@^4';

  return html`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="${title}" />
        <title>${title}</title>
        <link rel="stylesheet" href="${CDN_BASE}/swagger-ui.css" />
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="${CDN_BASE}/swagger-ui-bundle.js" crossorigin></script>
        <script
          src="${CDN_BASE}/swagger-ui-standalone-preset.js"
          crossorigin
        ></script>
        <script>
          window.onload = () => {
            window.ui = SwaggerUIBundle({
              url: "./openapi.json",
              dom_id: "#swagger-ui",
              presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset,
              ],
              layout2: "StandaloneLayout",
            });
          };
        </script>
      </body>
    </html> `;
});
