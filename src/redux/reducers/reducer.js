// reducer.js file here we define initial stata and action type

const INTI_STATE = {
    carts : []
};

const cartreducer = (state = INTI_STATE,action)=>{
    switch(action.type){
        case 'ADD_CART':
            return{
                ...state,
                carts :[...state.carts,action.payload]
            }
            case 'RMV_CART':
                const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data
      };

            default : 
            return state
    }
}
export default  cartreducer;