import SHOP_DATA from '../../Component/shopData/shopData';

const INITIAL_STATE = {
    SHOP_DATA: SHOP_DATA,
    PrevState: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOW':
            return {
                ...state,
                SHOP_DATA: state.PrevState.sort((a, b) => {
                    return a.price - b.price
                })
            }

        case 'HIGH':
            console.log("Hello")
            return {
                ...state,
                SHOP_DATA: state.PrevState.sort((a, b) => {
                    return b.price - a.price
                })
            }

        case 'RESET':
            return {
                ...state,
                SHOP_DATA: state.PrevState
            }

        case 'FILTER':
            return {
                ...state,
                SHOP_DATA: state.PrevState.filter(filterShopData => {
                    return filterShopData.tag == action.payload
                })
            }
        default:
            return state
    }
}

export default shopReducer;
