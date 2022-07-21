export interface Product {
    success: boolean;
    data: {
        id:number;
        product_name:string;
        price:number;
        banner:string;
    }
    message:string;
}