import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    getBookById(bookId: ID): Book
  }
  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

const books = [
  {
    id: 0,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 1,
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    getBookById: (_, args) => books.find((book) => book.id == args.bookId),
  },
  Mutation: {
    addBook: (_, args) => {
      const lastId = books.at(-1).id;
      const newId = lastId + 1;
      books.push({
        title: args.title,
        author: args.author,
        id: newId,
      });
      return books.at(-1);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
