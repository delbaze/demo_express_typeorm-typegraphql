import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Book from "./Book";
enum EnumNationality {
  FR,
  US,
}

@Entity("authors")
export default class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  birthday: Date;

  @Column()
  nationality: EnumNationality;

  @OneToMany(() => Book, (b) => b.author)
  books: Book[]
}
