

const initialState = {
    cart: [],

}

export const getTotal = (cart) => {
    return (
        cart.reduce((amount, item) => parseInt(item.price) + amount, 0)
    )
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Item_To_Cart":
            return {
                ...state, cart: [...state.cart, action.item]
            }
        case "Remove_Item_From_Cart":
            return {

            }
        default:
            return state
    }
}

export default CartReducer