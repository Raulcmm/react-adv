import {ProductCard as ProductCardHOC} from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductsButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductImage } from "./ProductImage"
export { ProductButtons } from "./ProductsButtons"
export { ProductTitle } from "./ProductTitle"


//Crear ProductCard con las props del HOC y además {title,image,buttons}
export  const ProductCard: ProductCardHOCProps =Object.assign(ProductCardHOC,{
    Title:ProductTitle,
    Image:ProductImage,
    Buttons: ProductButtons
})



export default ProductCard