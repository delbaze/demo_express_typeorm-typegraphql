import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Book from "../entity/Book";
class BookController {
  db: Repository<Book>;
  constructor() {
    this.db = datasource.getRepository("Book");
  }

  async listBooks() {
    return await this.db.find({ relations: { author: true } });
  }

  async addBook({ title, authorId }: { title: string; authorId: string }) {
    let authorRepo = datasource.getRepository("Author");
    let author = await authorRepo.findOneBy({ id: authorId });
    if (author !== null) {
      const book = await this.db.save({
        title,
        author,
      });
      return book;
    } else {
      throw new Error("L'auteur n'existe pas");
    }
  }
}
export default BookController;
