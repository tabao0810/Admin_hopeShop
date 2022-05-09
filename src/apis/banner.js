import axios from "axios";

export const getAllBannerApi = async () => {
    const res = await axios({
        method: "GET",
        url:"https://api-hope.herokuapp.com/api/banners",
    });
    return res.data.Banner;
};
export const createBannerApi = async(banner)=>{
    const res = await axios({
        method:"POST",
        url:`https://api-hope.herokuapp.com/api/banners/create`,
        data:banner
    });
    return res.data;

}
export const  deleteBannerApi = async (id)=>{
    const res = await axios({
        method:"DELETE",
        url:`https://api-hope.herokuapp.com/api/banners/${id}`
    });
    return res;
};