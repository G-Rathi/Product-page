
export const addtocart = (item) => {
    return {
        type: "Add_Item_To_Cart",
        item: {
            id: item.id,
            name: item.name,
            quantity: 1,
            price: item.price,
        }
    }
}
export const removefromcart = () => {
    return {
        type: "Remove_Item_From_Cart"
    }
}