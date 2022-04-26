import axios from "axios";


export const getAllUserApi = async () => {
    const res = await axios({
        method: "GET",
        url:"http://localhost:5035/api/all-user",
    });
    return res.data.User;
};
export const  deleteUserApi = async (id)=>{
    const res = await axios({
        method:"DELETE",
        url:`http://localhost:5035/api/users/delete/${id}`
    });
    return res;
};
