import axios from "axios";

export const getAllProductsApi = async() => {
    const res = await axios({
        method:"GET",
        url:"http://localhost:5035/api/product/get",
    });
    return res.data.Product;
}
export const getSingleProductsApi = async(productId) => {
    const res = await axios({
        method:"GET",
        url:`http://localhost:5035/api/product/${productId}`,       
    });
    return res.data.Product;
}
export const updateProductApi  = async (product) =>{
    const res = await axios({
        method: "PUT",
         url:`http://localhost:5035/api/product/${product._id}`,  
         data: product      
    });
    return res;
}
export const  deleteProductApi = async (id)=>{
    const res = await axios({
        method:"DELETE",
        url:`http://localhost:5035/api/product/${id}`
    });
    return res;
};
export const createProductApi = async(product)=>{
    const res = await axios({
        method:"POST",
        url:"http://localhost:5035/api/product/create",
       data:product
    })
    return res.data
}