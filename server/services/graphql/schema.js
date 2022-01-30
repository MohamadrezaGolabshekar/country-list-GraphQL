const axios = require("axios");
const { GraphQLJSONObject } = require("graphql-type-json");
const { getRedis } = require("../redis");
const { BASE_CURRENCY } = require("../../constants");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const CountryType = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve(parent, args) {
        return (
          parent.name && (parent.name.official || parent.name.common || "")
        );
      },
    },
    population: { type: GraphQLInt },
    currencies: {
      type: new GraphQLList(GraphQLString),
      resolve(parent, args) {
        return parent.currencies ? Object.keys(parent.currencies) : [];
      },
    },
  }),
});

const CurrencyType = new GraphQLObjectType({
  name: "Currency",
  fields: () => ({
    currencies: {
      type: GraphQLJSONObject,
      resolve: async (parent, args) => parent,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    country: {
      type: CountryType,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return axios
          .get(`https://restcountries.com/v3.1/name/${args.name}?fullText=true`)
          .then((resp) => resp.data[0]);
      },
    },
    currency: {
      type: CurrencyType,
      async resolve(parent, args) {
        const resp = await getRedis(BASE_CURRENCY);
        return resp;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
