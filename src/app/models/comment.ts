export class Comment {
  id: number;
  author: string;
  trainingId: number;
  content: string;
  postingDate: number;

  constructor(author: string, trainingId: number, content: string, postingDate: number) {
    this.id = 1000000000 * Math.random();
    this.author = author;
    this.trainingId = trainingId;
    this.content = content;
    this.postingDate = postingDate;
  }
}
