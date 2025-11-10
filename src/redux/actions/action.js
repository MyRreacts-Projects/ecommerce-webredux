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


// remove individual items
const REMOVE = (item)=>{
    return{
        type : 'RMV_ONE',
        payload : item
    }
    
}


export {ADD ,DLT,REMOVE};