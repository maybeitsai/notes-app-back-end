import { server as _server } from '@hapi/hapi';
import routes from './routes.js';
import process from 'process';

const init = async () => {
  const server = _server({
    port: 8017,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

export { init };
init();