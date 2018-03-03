import {IComment} from './icomment';

export class Comment implements IComment {
  id: number;
  author: string;
  trainingId: number;
  content: string;
  postingDate: Date;

  constructor(author: string, trainingId: number, content: string, postingDate: Date) {
    this.id = 1000000000 * Math.random();
    this.author = author;
    this.trainingId = trainingId;
    this.content = content;
    this.postingDate = postingDate;
  }
}
