import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  Relation
} from 'typeorm';
import { Chat } from './chat';

@Entity()
export class ChatMessage {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  content!: string;

  @Column()
  origin!: string;

  @ManyToOne((_type) => Chat, (chat: Chat) => chat.messages, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  chat!: Relation<Chat>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}