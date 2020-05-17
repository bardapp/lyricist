import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router';
import { buildSchema } from 'type-graphql';
import { Resolvers } from './graphql';
import { ApolloServer } from 'apollo-server-koa';
import { GraphQLSchema } from 'graphql';

// Set up Koa
const app = new Koa();

// Add middleware
app.use(bodyParser());

// Add routes
const rootRouter = new Router();
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

const bootstrap = async () => {
  let schema: GraphQLSchema;
  try {
    schema = await buildSchema({
      resolvers: [Resolvers.UserResolver],
    });
  } catch (e) {
    console.error('Something went wrong building the GraphQL schema.');
    console.error(e.message);
    process.exit(2);
  }

  const apollo = new ApolloServer({ schema, introspection: true });

  apollo.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: '*',
    },
  });

  app.listen(3000, () => {
    console.log('✨ Server started on *:3000!');
  });
};

if (require.main) {
  // If the app was started as an executable
  try {
    bootstrap();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

export default app;
