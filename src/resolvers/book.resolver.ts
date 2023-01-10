import BookController from "../controller/Book";
import { MutationAddBookArgs } from "@/graphgen";

export default {
  Query: {
    books: (_: any, {}, context: any, infos: any) => {
      return new BookController().listBooks();
    },
    getBookById: () => {},
  },
  Mutation: {
    addBook: (_: any, args: MutationAddBookArgs) => {
      console.log(args);
      const { title, authorId } = args;
      let book = new BookController().addBook({ title, authorId });
      return book;
    },
  },
};
