import { Props as ProductCardProps    } from '../components/ProductCard';
import { Props as ProductTitleProps   } from '../components/ProductTitle';
import { Props as ProductImageProps   } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductsButtons';

export interface Product {
    id      :string,
    title?   :string,
    img?    :string
}

export interface ProductContextProps{
    counter:number;
    increaseBy(value: number):void,
    product:Product;
}

export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps): JSX.Element,
    Title   : ( PropiedadesQueRecibe : ProductTitleProps   ) => JSX.Element ;
    Image   : ( PropiedadesQueRecibe : ProductImageProps   ) => JSX.Element ;
    Buttons : ( PropiedadesQueRecibe : ProductButtonsProps ) => JSX.Element ;
}
