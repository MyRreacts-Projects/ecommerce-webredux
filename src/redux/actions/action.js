// action.js file 
const ADD = (item)=>{
    return{
        type : 'ADD_CART',
        payload : item
    }
    
}


// remove item 
const DLT = (id)=>{
    return{
        type : 'RMV_CART',
        payload : id
    }
    
}
export {ADD,DLT};