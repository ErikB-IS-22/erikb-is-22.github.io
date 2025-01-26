export class Stock {
    id: number;
    src: string;
    title: string;
    text: string;
  
    constructor(id: number, src: string, title: string, text: string) {
      this.id = id;
      this.src = src;
      this.title = title;
      this.text = text;
    }
  }