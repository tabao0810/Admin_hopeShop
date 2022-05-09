import axios from "axios";

export const getAllBrandsApi = async () => {
    const res = await axios({
        method: "GET",
        url:"https://api-hope.herokuapp.com/api/brands",
    });
    return res.data.Brand;
};
export const createBrandApi = async(brand)=>{
    const res = await axios({
        method:"POST",
        url:`https://api-hope.herokuapp.com/api/brands/create`,
        data:brand
    });
    return res.data;

}
export const  deleteBrandApi = async (id)=>{
    const res = await axios({
        method:"DELETE",
        url:`https://api-hope.herokuapp.com/api/brands/${id}`
    });
    return res;
};