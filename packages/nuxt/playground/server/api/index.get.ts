import { defineEventHandler } from 'h3';

/**
 * @openapi
 * /api:
 *  get:
 *   tags:
 *    - api
 *   summary: Ping
 *   description: Ping endpoint
 *   responses:
 *    200:
 *     description: OK
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         ping:
 *          type: boolean
 *
*/
export default defineEventHandler(() => ({
  ping: true
}));
