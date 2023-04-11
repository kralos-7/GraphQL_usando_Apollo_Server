import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const persons = [
    {
        name: "juan",
        phone: "1111111111",
        street: "emiliano",
        city: "Mexico",
        id: "123-123-123-123"
    },
    {
        name: "juan_1",
        phone: "1111111111",
        street: "emiliano",
        city: "Mexico",
        id: "456-456-456-456"
    },
    {
        name: "jua_2",
        phone: "1111111111",
        street: "emiliano",
        city: "México",
        id: "789-789-789-789"
    },
    {
        name: "juan_3",
        phone: "1111111111",
        street: "emiliano",
        city: "México",
        id: "123-123-456-789"
    },
]


const typeDefs = `#graphql
    type Person {
        name: String!
        phone: String
        street: String!
        city: String
        id: ID!
    }
    type Query {
        personsCount: ID!
        allPersons: [Person]!
    }
`

const resolvers = {
    Query: {
        personsCount: () => persons.length,
        allPersons: () => persons
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
