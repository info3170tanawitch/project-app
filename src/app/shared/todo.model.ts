export class Todo {
    constructor(
      public text: string,
      public completed: boolean = false,
      public color: string = '#ffffff' // default color is white
    ) {}
  }