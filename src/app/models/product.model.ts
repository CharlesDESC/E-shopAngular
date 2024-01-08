export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public imageUrl: string,
    public likes: number,
    public isLiked: boolean,
    public sizes: { taille: string; price: number }[],
    public date: Date // public cart: number,
  ) // public isAddedCart: boolean
  {}
}
