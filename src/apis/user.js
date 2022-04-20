import axios from "axios";


export const getAllUserApi = async () => {
    const res = await axios({
        method: "GET",
        url:"http://localhost:5035/api/all-user",
    });
    return res.data.User;
};

export const createUserApi = async (user) =>{
    const res = await axios({
        method:"POST",
        url:"https://620c50d0b5736325938b6b19.mockapi.io/users",
        data:user,
    });
    return res.data;
};

export const  removeUserApi = async (id)=>{
    const res = await axios({
        method:"DELETE",
        url:`https://620c50d0b5736325938b6b19.mockapi.io/users/${id}`
    });
    return res;
};

export const updateUserApi = async (user)=>{
    const res = await axios({
        method:"PUT",
        url: `https://620c50d0b5736325938b6b19.mockapi.io/users/${user.id}`,
        data : user
    });
    return res;
}