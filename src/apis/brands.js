import axios from "axios";

export const getAllBrandsApi = async () => {
    const res = await axios({
        method: "GET",
        url:"http://localhost:5035/api/brands",
    });
    return res.data.Brand;
};
export const createBrandApi = async(brand)=>{
    const res = await axios({
        method:"POST",
        url:`http://localhost:5035/api/brands/create`,
        data:brand
    });
    return res.data;

}
export const  deleteBrandApi = async (id)=>{
    const res = await axios({
        method:"DELETE",
        url:`http://localhost:5035/api/brands/${id}`
    });
    return res;
};