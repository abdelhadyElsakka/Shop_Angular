export interface Products {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{rate:number, count:number}
}

export interface Wish {
    id: number;
    title: string;
    image: string;
}