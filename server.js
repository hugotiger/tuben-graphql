import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";
import datasources from "./datasources";
import dotenv from "dotenv";
const express = require('express');

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ ...datasources }),
});

const app = express();

server.applyMiddleware({ app });

//app.listen().then(({ url }) => {
//  console.log(`🚀 Server ready at ${url}`);
//});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
