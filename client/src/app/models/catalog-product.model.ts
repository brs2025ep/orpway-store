export enum Category {
    Laptop = 'Laptop',
    Desktop = 'Desktop',
    AllInOne = 'All-in-One',
  }

export interface CatalogProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    imageUrl: string;
  }


export const produtos = [
    {id: 1, name: 'Laptop i3', price: 3000, description: 'Laptop i3 8GB RAM 256GB SSD', category: Category.Laptop, imageUrl: 'assets/1.jpg'},
    {id: 2, name: 'Laptop i5', price: 5000, description: 'Laptop i5 8GB RAM 256GB SSD', category: Category.Laptop, imageUrl: 'assets/2.jpg'},
    {id: 3, name: 'MacBook Air M1', price: 12000, description: 'MacBook with M1, high performance and long duration batery.', category: Category.Laptop, imageUrl: 'assets/3.jpg'},
    {id: 4, name: 'MacBook Pro 13', price: 15000, description: 'MacBook Pro with M1, perfect for developers.', category: Category.Laptop, imageUrl: 'assets/4.jpg'},
    {id: 5, name: 'PC Gamer i7', price: 8000, description: 'Desktop Gamer with i7, 16GB RAM, 512GB SSD and RTX 3060.', category: Category.Desktop, imageUrl: 'assets/5.jpg'},
    {id: 6, name: 'PC Gamer Ryzen 7', price: 12000, description: 'Desktop Gamer with Ryzen 7, 16GB RAM, 512GB SSD and RTX 3060.', category: Category.Desktop, imageUrl: 'assets/6.jpg'},
    {id: 7, name: 'iMac M3 24', price: 25000, description: 'iMac M3 24, perfect for designers.', category: Category.AllInOne, imageUrl: 'assets/7.jpg'},
    {id: 8, name: 'iMac 27 i9', price: 20000, description: 'iMac 27 with i9, perfect for video editors.', category: Category.AllInOne, imageUrl: 'assets/8.jpg'},
]