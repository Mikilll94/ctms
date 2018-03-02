export class Comment {
  id: number;
  author: string;
  trainingId: number;
  content: string;
  postingDate: number;

  constructor(author: string, trainingId: number, content: string, postingDate: number) {
    this.author = author;
    this.trainingId = trainingId;
    this.content = content;
    this.postingDate = postingDate;
  }
}
