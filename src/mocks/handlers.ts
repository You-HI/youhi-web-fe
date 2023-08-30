import { rest } from 'msw';

import { mockData } from './data';

export const handlers = [
  ...mockData.map(({ url, method, status, response }) => {
    return rest[method](url, (req, res, ctx) => {
      if (status === 200) {
        return res(ctx.status(status), ctx.json(response.success));
      }
      return res(ctx.status(status), ctx.json(response.failure));
    });
  }),
];
