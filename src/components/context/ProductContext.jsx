import React, { createContext, useState } from 'react';
import axios from 'axios'
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts]=useState([])

    const [searchTerm, setSearchTerm] = useState('');
    let filteredPrice=undefined
    const updateSearchTerm = (term) => {
        setSearchTerm(term);
        if(term !== null){
            const searchfilteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(searchfilteredProducts)
        }
        else{
            setFilteredProducts(products)
        }
        
    };

    //finding maximum price 
    const maxPrice = products.reduce((max, product) => {
        return product.price > max ? product.price : max;
    }, 0);

    // Define a function to filter products
    const filterProducts = (filter) => {
        if(filter === 'all'){
            setFilteredProducts(products)
        }
        else{
            const filtered = products.filter((product) =>
                product.category?.includes(filter)
            );
            setFilteredProducts(filtered)
        }
    };

    const filterByPrice=(filter)=>{
     
            filteredPrice = products.filter((product) => product.price <= parseInt(filter))
    
        setFilteredProducts(filteredPrice)
    }

    const sortProducts=(sortType)=>{
        const sortedProducts = [...products];
            if(sortType ==='asc'){
                sortedProducts.sort((a,b)=>a.price-b.price)
               
            }
            else if(sortType === 'dsc'){
                sortedProducts.sort((a,b)=>b.price-a.price)
                
            }
            else if (sortType === 'az') {
                sortedProducts.sort((a, b) => a.title.localeCompare(b.title))

            }
            else if (sortType === 'za') {
                sortedProducts.sort((a, b) => b.title.localeCompare(a.title))

            }

            setProducts(sortedProducts)
    }

    //clear filter function
    const clearFilter=()=>{
      
        setFilteredProducts(products)
    }

    const getData=()=>{
        axios.get('https://realshop-product-api.onrender.com/product',{
            headers:{
                Accept:'application/json'
            }
        })
            .then(resp => {
                setProducts(resp.data)
            })
            .catch(err => console.log(err))
     }
 
    return (
        <ProductContext.Provider value={{ products, filteredProducts, filterProducts, getData, filterByPrice, sortProducts, searchTerm, updateSearchTerm, maxPrice, clearFilter }}>
            {children}
        </ProductContext.Provider>
    );
};
