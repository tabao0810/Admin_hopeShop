import axios from "axios";

export const getAllOrdersApi = async() => {
    const res = await axios({
        method:"GET",
        url:"http://localhost:5035/api/order/getOrder",
    });
    return res.data.Orders;
}
export const updateOrderApi  = async (product) =>{
    const res = await axios({
        method: "PUT",
         url:`http://localhost:5035/api/order/update/${product._id}`,  
         data: product      
    });
    return res;
}