import {  createProductApi,deleteProductApi, getAllProductsApi,getSingleProductsApi, updateProductApi } from "../../apis/products";

const state = () =>{
    return{
        productList:[

        ],
        productDetail:{
            
        },
        searchClothing:"",
        searchAccesory:"",
        searchBag:"",
        searchShoe:"",
    }
};
const getters={
    productListClothing(state){
       return state.productList.filter((product)=> product.typeProduct === 'Quần áo')
    },
    productListAccessory(state){
        return state.productList.filter((product) => product.typeProduct === 'Phụ kiện')
    },
    productListBag(state){
        return state.productList.filter((product) => product.typeProduct === 'Túi')
    },
     productListShoe(state){
        return state.productList.filter((product) => product.typeProduct === 'Giày')
    },
    productClothingListByName(state){
        const listClothing = state.productList.filter((product)=> product.typeProduct === 'Quần áo')
        const {searchClothing} = state;
        return listClothing.filter((product) => 
        product.name.toLowerCase().includes(searchClothing.toLowerCase()))
    },
     productAccessoryListByName(state){
        const listAccessory = state.productList.filter((product) => product.typeProduct === 'Phụ kiện')
        const {searchAccesory} = state;
        return listAccessory.filter((product) => 
        product.name.toLowerCase().includes(searchAccesory.toLowerCase()))
    },
     productBagListByName(state){
        const listBag = state.productList.filter((product) => product.typeProduct === 'Túi')
        const {searchBag} = state;
        return listBag.filter((product) => 
        product.name.toLowerCase().includes(searchBag.toLowerCase()))
    },
     productShoeListByName(state){
        const listShoe = state.productList.filter((product) => product.typeProduct === 'Giày')
        const {searchShoe} = state;
        return listShoe.filter((product) => 
        product.name.toLowerCase().includes(searchShoe.toLowerCase()))
    }
}

const mutations={
    setProductMutation(state,payload){
        state.productList = payload.reverse()
    },
    setProductDetailMutation(state,payload){        
        state.productDetail = payload;
    },  
    searchClothingMutation(state,payload){
        state.searchClothing = payload
    },
    searchAccesoryMutation(state,payload){
        state.searchAccesory = payload
    }, 
    searchBagMutation(state,payload){
        state.searchBag = payload
    }, 
    searchShoeMutation(state,payload){
        state.searchShoe = payload
    },          
}

const actions={  
     searchClothingAction(context,data){        
        context.commit("searchClothingMutation",data)       
    },
    searchAccessoryAction(context,data){        
        context.commit("searchAccesoryMutation",data)       
    },
    searchBagAction(context,data){        
        context.commit("searchBagMutation",data)       
    },
    searchShoeAction(context,data){        
        context.commit("searchShoeMutation",data)       
    },

    async getAllProductAction(context){
        const payload = await getAllProductsApi();
        context.commit("setProductMutation",payload)
    },
    async getSingleProductsAction(context,payload){   
       const productDetail =  await getSingleProductsApi(payload);      
       context.commit("setProductDetailMutation",productDetail)
    },
    async updateProductActions(context,payload){
        await updateProductApi(payload);
        alert("Cập nhật thành công!")
        context.dispatch("getAllProductAction");
    },
    async deleteProductActions(context,payload){      
        if(confirm("Bạn có chắc chắn xóa sản phẩm này") == true){
            await deleteProductApi(payload);
        context.dispatch("getAllProductAction");
        }else{
            context.dispatch("getAllProductAction");
        }
    },
    async createProductAction(context,data){        
        await createProductApi(data);
        context.dispatch("getAllProductAction");

    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}