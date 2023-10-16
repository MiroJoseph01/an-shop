import { Category } from "./category";

export class ProductModel {
    constructor(
      public name: string,
      public description: string,
      public pirce: number,
      public category: Category,
      public isAvaliable: boolean = false
    ) {}
  }