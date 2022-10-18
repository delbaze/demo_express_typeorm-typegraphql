
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Author from "./Author";

@Entity("books")
export default class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Author, (a) => a.books, { eager: true, onDelete: "CASCADE" })
  @JoinColumn()
  author: Author;
}
