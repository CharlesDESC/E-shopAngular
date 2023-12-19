export class Product {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public likes: number,
        public isLiked: boolean,
        public sizes: { taille: string, price: number }[],
        public date: Date
    ) {
    }
}
