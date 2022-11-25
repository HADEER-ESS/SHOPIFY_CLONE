import React from "react";
import { connect } from "react-redux";
import COLORS from "../../Constants";
import {AddToCart , UpdateCartItemNumberDecrement, CustomeFeatureAddToCartFun , CustomAddToCartFun} from "../../redux/Features/CartSlicer";
import DisplayAttributes from "../DisplayAttribute/DisplayAttr";
import DisplayCartCurrency from "../DisplayCurrencyForCart/DisplayCartCurrency";
import CustomeAttribute from "../DisplayCustomeAttribute/CustomeAttribute";
import "./PopUpCartItem.css";

class DisplayPopUpCartItems extends React.Component{
    render(){
        const { TotalQuantity ,AddToCart , UpdateCartItemNumberDecrement , CartItemData , CustomeCartAttributes , CartWithCustomeFeatures , CustomAddToCartFun , CustomeFeatureAddToCartFun} = this.props
        return(
            <div>
            <div className="CartDetailsContent" style={{display:'flex'}}>
                <p style={{fontSize:16 , lineHeight:"25px" , fontWeight:'700' , paddingRight:7 , color:COLORS.PrimaryColor}}>My Bag, </p>
                <p style={{fontSize:16 , lineHeight:"25px" , fontWeight:"500" , color:COLORS.PrimaryColor}}> {TotalQuantity} items</p>
            </div>
                    {CartItemData.map((item , index) => {
                        const itemIndex = CartWithCustomeFeatures.findIndex((custome)=> custome.brand === item.id)
                        const itemIndexDefault = CustomeCartAttributes.findIndex((custome) => custome.brand === item.id)
                        return(
                            <div>
                                {itemIndex >= 0 && 
                                    <div key={index} style={{display:'flex' , marginBottom : 40 , justifyContent:'space-between'}}>
                                <div className="CartDetailsContent">
                                <p style={{fontWeight:"300" , fontSize:16 , lineHeight:"25px" , color:COLORS.PrimaryColor}}>{item.brand}</p>
                                <p style={{fontWeight:"300" , fontSize:16 , lineHeight:"25px" , color:COLORS.PrimaryColor}}>{item.name}</p>
                                <DisplayCartCurrency prices={item.prices} quantity={item.quantity} from={"popup"}/> 
                                {itemIndex >=0 && <CustomeAttribute customeFeatureOfItem={CartWithCustomeFeatures[itemIndex]} attributes={item.attributes} popup={"popup"}/>}
                                </div>
                                <div style={{display : "flex" , alignItems:'center'}}>
                                {
                                    itemIndex >= 0 &&
                                    <div className="CartItemQuantity" style={{marginRight : 8}}>
                                    <button onClick={()=>{AddToCart(item); CustomeFeatureAddToCartFun(CartWithCustomeFeatures[itemIndex])}}>+</button>
                                    <p>{CartWithCustomeFeatures[itemIndex].quantity}</p>
                                    <button onClick={()=>UpdateCartItemNumberDecrement(CartWithCustomeFeatures[itemIndex])}>-</button>
                                </div>
                                }
                                <div className="CartItemImage">
                                    <img src={item.gallery[0]} alt={item.brand} style={{width:121}}/>
                                </div>
                                </div>
                            </div>
                                }
                                {
                                    itemIndexDefault >= 0 && 
                                    <div key={index} style={{display:'flex' , marginBottom : 40 , justifyContent:'space-between'}}>
                                <div className="CartDetailsContent">
                                <p style={{fontWeight:"300" , fontSize:16 , lineHeight:"25px" , color:COLORS.PrimaryColor}}>{item.brand}</p>
                                <p style={{fontWeight:"300" , fontSize:16 , lineHeight:"25px" , color:COLORS.PrimaryColor}}>{item.name}</p>
                                <DisplayCartCurrency prices={item.prices} quantity={item.quantity} from={"popup"}/>
                                {itemIndexDefault >=0 && <DisplayAttributes customeFeatureOfItem={CustomeCartAttributes[itemIndexDefault]} attributes={item.attributes} popup={"popup"}/>}
                                </div>
                                <div style={{display : "flex" , alignItems:'center'}}>
                                {
                                    itemIndexDefault >= 0 &&
                                    <div className="CartItemQuantity" style={{marginRight : 8}}>
                                    <button onClick={()=>{AddToCart(item); CustomAddToCartFun(CustomeCartAttributes[itemIndexDefault])}}>+</button>
                                    <p>{CustomeCartAttributes[itemIndexDefault].quantity}</p>
                                    <button onClick={()=>UpdateCartItemNumberDecrement(CustomeCartAttributes[itemIndexDefault])}>-</button>
                                    </div>
                                }
                                <div className="CartItemImage">
                                    <img src={item.gallery[0]} alt={item.brand} style={{width:121}}/>
                                </div>
                                </div>
                            </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProp = state => {
    return{
        CartItemData : state.cart.cartItems,
        CustomeCartAttributes : state.cart.CustomeCartItems,
        CartWithCustomeFeatures : state.cart.CustomeFeatureCartItems,
        TotalQuantity : state.cart.countQuantity,
    }
}
export default connect(mapStateToProp , {AddToCart , UpdateCartItemNumberDecrement , CustomeFeatureAddToCartFun , CustomAddToCartFun})(DisplayPopUpCartItems)