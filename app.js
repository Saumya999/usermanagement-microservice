const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { graphqlHTTP } = require('express-graphql');

const { authentication } = require('./api/middleware/authmiddleware');
const { createJwtToken } = require('./api/utils/authentication');


/** MongoDb Connection Establishment */
mongoose.connect(
  "mongodb+srv://shraddha:shraddha@cluster0.svyi6.mongodb.net/octopus?retryWrites=true&w=majority",
  {useNewUrlParser: true, useUnifiedTopology: true}
);
/** For logging the requests using morgan */
app.use(morgan("dev"));
//app.use(authentication);
/** Parsing the URL and json */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/** GraphQL Schema And Resolvers import */
const graphQlSchema = require('./api/graphql/Schemas/schema');
const graphQlResolvers = require('./api/graphql/Resolvers/userResolvers');

/** Defining the graphql endpoint */
app.use('/userManagement/v1/graphql', graphqlHTTP({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true
}));

/*** This Get Route is still under Test for JWT Verification Enhancement */
app.get('/authProvider', (req, res) => {
  res.json(createJwtToken({
    username: "shraps999",
    email: "shraps123@gmail.com"
  }));
})

/** Exporting App configuration for Server Creation */
module.exports = app;
