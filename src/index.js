import app from './server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, (error) => {
  if (error) {
    console.log(error); // eslint-disable-line
  }

  console.log('🚀 started'); // eslint-disable-line
  console.log('.  '); // eslint-disable-line
  console.info(`🌎  Listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode on Node ${process.version}.`); // eslint-disable-line
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!'); // eslint-disable-line

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...'); // eslint-disable-line
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
