import { createLogger } from 'redux-logger';

export default () => {
  const middleware = [];
  const logger = createLogger({ collapsed: true });
  middleware.push(logger);

  return middleware;
};