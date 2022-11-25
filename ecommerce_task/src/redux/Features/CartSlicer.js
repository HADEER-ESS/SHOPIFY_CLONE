import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [] , //for display the data in cart
    CustomeCartItems : [] ,  //for display the default features
    CustomeFeatureCartItems : [] , //display the custome features
    countQuantity : 0 , //count the total quantity
}
export const CartSlicer = createSlice({
    name : "cart",
    initialState,
    reducers : {
        AddToCart :(state , action)=>{
            const itemIndex = state.cartItems.findIndex((item) => 
                item.id === action.payload.id
            )
            if(itemIndex >= 0){
                state.cartItems[itemIndex].quantity += 1;
                state.countQuantity += 1
                state.cartItems[itemIndex].prices.forEach((element) =>{
                    element.amount += (element.amount / (state.cartItems[itemIndex].quantity-1))
                })
            }else{
               state.cartItems.push({...action.payload , quantity : 1}) 
               state.countQuantity += 1
            }
        },
        CustomAddToCartFun : (state , action) => {
            const itemIndex = state.CustomeCartItems.findIndex((item)=>
                item.brand === action.payload.brand
            )
            if(itemIndex >= 0){
                state.CustomeCartItems[itemIndex].quantity += 1
            }else{
               state.CustomeCartItems.push(action.payload) 
            }
        },
        CustomeFeatureAddToCartFun : (state , action) =>{
            const itemIndex = state.CustomeFeatureCartItems.findIndex((item)=>
                item.brand === action.payload.brand
            )
            if(itemIndex >= 0){
                state.CustomeFeatureCartItems[itemIndex].quantity += 1
            }else{
                state.CustomeFeatureCartItems.push(action.payload)
            }
        },
        UpdateCartItemNumberDecrement : (state , action)=>{
            if(action.payload.customeFeatures){
                const itemIndex = state.CustomeFeatureCartItems.findIndex((item) => 
                    item.brand === action.payload.brand
                )
                const itemCartIndex = state.cartItems.findIndex((item) => 
                    item.id === action.payload.brand
                )
                if(itemIndex >= 0 && itemCartIndex >=0){
                    if(state.CustomeFeatureCartItems[itemIndex].quantity > 1){
                        state.CustomeFeatureCartItems[itemIndex].quantity -= 1;
                        state.cartItems[itemCartIndex].quantity -= 1 ;
                        state.countQuantity -= 1;
                        state.cartItems[itemCartIndex].prices.forEach((element) =>{
                            element.amount -= parseFloat(element.amount / (state.cartItems[itemIndex].quantity+1)).toFixed(2)
                        })
                    }else{
                        state.CustomeFeatureCartItems.splice(itemIndex , 1)
                        state.countQuantity -= 1
                        if(state.cartItems[itemCartIndex].quantity > 1){
                            state.cartItems[itemCartIndex].quantity -= 1
                        }else{
                           state.cartItems.splice(itemCartIndex , 1) 
                        }
                    }
                }
            }
            else{
                const itemIndex = state.CustomeCartItems.findIndex((item) => 
                    item.brand === action.payload.brand
                )
                const itemCartIndex = state.cartItems.findIndex((item) => 
                    item.id === action.payload.brand
                )
                if(itemIndex >= 0 && itemCartIndex >=0){
                    if(state.CustomeCartItems[itemIndex].quantity > 1){
                        state.CustomeCartItems[itemIndex].quantity -= 1;
                        state.cartItems[itemCartIndex].quantity -= 1 ;
                        state.countQuantity -= 1;
                        state.cartItems[itemCartIndex].prices.forEach((element) =>{
                            element.amount -= parseFloat(element.amount / (state.cartItems[itemIndex].quantity+1)).toFixed(2)
                        })
                    }else{
                        state.CustomeCartItems.splice(itemIndex , 1)
                        state.countQuantity -= 1
                        if(state.cartItems[itemCartIndex].quantity > 1){
                            state.cartItems[itemCartIndex].quantity -= 1
                        }else{
                           state.cartItems.splice(itemCartIndex , 1) 
                        }
                    }
                }
            }
        },
        RemoveAllFromCart : (state)=>{
            //remove all item from cart
            state.cartItems = [];
            state.CustomeCartItems = [] ;
            state.CustomeFeatureCartItems = [];
            state.countQuantity = 0;
            console.log("array is empty")
        }
    }
})

export const { AddToCart , CustomAddToCartFun, CustomeFeatureAddToCartFun , RemoveAllFromCart , UpdateCartItemNumberDecrement} = CartSlicer.actions
export default CartSlicer.reducer 