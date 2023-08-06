import Product from "../models/Product"

class FilterProducts {
    static getProducts = (
        search: string, 
        filter: string,
        allProducts: Product[]
    ) => {
        if(!search && !filter) return allProducts;
        else if (search && !filter) return allProducts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
        else if (!search && filter) return allProducts.filter(p => p.category === filter.toLowerCase());
        else if (search && filter) return allProducts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())).filter(p => p.category === filter.toLowerCase());
        else return allProducts;
    }
}

export default FilterProducts;