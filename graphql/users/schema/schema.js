const graphql = require("graphql");
const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const dns = "http://localhost:3000";

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve: async (parentValue, args) => {
        const { id } = parentValue;
        const { data } = await axios.get(`${dns}/companies/${id}/users`);
        return data;
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve: async (parentValue, args) => {
        const { companyId } = parentValue;
        const { data } = await axios.get(`${dns}/companies/${companyId}`);
        return data;
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: async (parentValue, args) => {
        const { id } = args;
        const { data } = await axios.get(`${dns}/users/${id}`);
        return data;
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve: async (parentValue, args) => {
        const { id } = args;
        const { data } = await axios.get(`${dns}/companies/${id}`);
        return data;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        const { companyId, ...required } = args;
        const { data } = await axios.post(`${dns}/users`, required);
        return data;
      },
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve: async (parentValue, args) => {
        const { id } = args;
        const { data } = await axios.delete(`${dns}/users/${id}`);
        return data;
      },
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        const { id, ...newData } = args;
        const { data } = await axios.patch(`${dns}/users/${id}`, newData);
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
