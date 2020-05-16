import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router';

// Set up Koa
const app = new Koa();

// Add middleware
app.use(bodyParser());

// Add routes
const rootRouter = new Router();
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

const bootstrap = async () => {
  app.listen(3000, () => {
    console.log('✨ Server started on *:3000!');
  });
};

if (require.main) {
  // If the app was started as an executable
  bootstrap();
}

export default app;
