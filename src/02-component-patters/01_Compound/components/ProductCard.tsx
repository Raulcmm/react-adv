import { createContext } from "react";

import useProduct from "../hooks/useProduct";

import { ProductContextProps, Props } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ( { children, product } : Props) => {

    const {counter, increaseBy} = useProduct(0)
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
};

// export default ProductCard;