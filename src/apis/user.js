import axios from "axios";


export const getAllUserApi = async () => {
    const res = await axios({
        method: "GET",
        url:"https://api-hope.herokuapp.com/api/all-user",
    });
    return res.data.User;
};
export const  deleteUserApi = async (id)=>{
    const res = await axios({
        method:"DELETE",
        url:`https://api-hope.herokuapp.com/api/users/delete/${id}`
    });
    return res;
};
