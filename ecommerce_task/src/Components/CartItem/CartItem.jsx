import React from "react";
import DisplayAttributes from "../DisplayAttribute/DisplayAttr";
import {AddToCart , UpdateCartItemNumberDecrement, CustomeFeatureAddToCartFun , CustomAddToCartFun} from "../../redux/Features/CartSlicer";
import "./CartItem.css";
import "../../index.css";
import { connect } from "react-redux";
import { IoIosArrowBack ,  IoIosArrowForward} from "react-icons/io";
import COLORS from "../../Constants";
import DisplayCartCurrency from "../DisplayCurrencyForCart/DisplayCartCurrency";
import CustomeAttribute from "../DisplayCustomeAttribute/CustomeAttribute";


class ImageSlider extends React.Component{
    state = {
        updatedNum : 0
    }
    render(){
        const {gallery} = this.props 
        const {updatedNum} = this.state
        return(
                <>
                    <img src={gallery[updatedNum]} alt={"brand"} style={{width:200}} />
                    <div style={{position:'absolute' , display:'flex' ,right:"1rem" , bottom:"1rem"}}>
                        <div onClick={()=>{if(updatedNum > 0) this.setState({updatedNum : updatedNum-1})}} style={updatedNum >0 ?{width:24 , height:24 , backgroundColor:"#000" , marginRight:8 ,display:'flex',justifyContent:'center' , alignItems:'center'}: {pointerEvents:'none' , backgroundColor:"#000" , marginRight:8 ,display:'flex',justifyContent:'center' , alignItems:'center' , width:24}}><IoIosArrowBack color={COLORS.WhiteColor} size={18}/></div>
                        <div onClick={()=>{if(updatedNum<gallery.length)this.setState({updatedNum : updatedNum+1})}} style={updatedNum < gallery.length-1 ?{width:24 , height:24 , backgroundColor:"#000" ,display:'flex',justifyContent:'center' , alignItems:'center'}: {pointerEvents:"none" , backgroundColor:"#000" , display:'flex',justifyContent:'center' , alignItems:'center' , width:24}}><IoIosArrowForward color={COLORS.WhiteColor} size={18}/></div>                           
                    </div>
                </>
        )
    }
}
class CartItem extends React.Component{
    render(){
        const { AddToCart , UpdateCartItemNumberDecrement , CartItemData , CustomeCartAttributes , CartWithCustomeFeatures , CustomAddToCartFun , CustomeFeatureAddToCartFun} = this.props
        return(
            <div className="CartItemStyles">
                {
                    CartItemData.map((item , index) => {
                        const itemIndex = CartWithCustomeFeatures.findIndex((custome)=> custome.brand === item.id)
                        const itemIndexDefault = CustomeCartAttributes.findIndex((custome) => custome.brand === item.id)
                        console.log("item from cart item data " , itemIndex)
                        return(
                            <div>
                            {itemIndex >= 0 && 
                            <div>
                            <div key={index} style={{display:'flex' , justifyContent:'space-between'}}>
                                <div className="CartDetailsContent">
                                <p style={{fontSize:30 , fontWeight:"600" , lineHeight:"27px" , color:COLORS.PrimaryColor , marginTop:16}}>{item.brand}</p>
                                <p style={{fontSize:30 , fontWeight:"400" , lineHeight:"27px" , color:COLORS.PrimaryColor}}>{item.name}</p>
                                <DisplayCartCurrency prices={item.prices} quantity={item.quantity}/>
                                {itemIndex >=0 && <CustomeAttribute customeFeatureOfItem={CartWithCustomeFeatures[itemIndex]} attributes={item.attributes}/> }
                                </div>
                                <div style={{display:'flex' , alignItems:'center'}}>
                                {
                                    itemIndex >= 0 && <div className="CartItemQuantity" style={{marginRight : 24}}>
                                    <button onClick={()=>{AddToCart(item); CustomeFeatureAddToCartFun(CartWithCustomeFeatures[itemIndex])}} className="CartItemButtonStyle">+</button>
                                    <p style={{textAlign:'center' , color:COLORS.PrimaryColor , fontSize : 24 , fontWeight:'500' , lineHeight:"38px"}}>{CartWithCustomeFeatures[itemIndex].quantity}</p>
                                    <button onClick={()=>UpdateCartItemNumberDecrement(CartWithCustomeFeatures[itemIndex])} className="CartItemButtonStyle">-</button>
                                </div> 
                                }
                                <div className="CartItemImage" style={{position:'relative'}}>
                                {
                                    item.gallery.length <= 1 ?
                                    <img src={item.gallery[0]} alt={item.brand} style={{width:200}}/>:
                                    <ImageSlider gallery={item.gallery}/>
                                }
                                </div>
                                </div>
                            </div>
                            <hr style={{borderTopWidth:1 , borderTopColor:COLORS.HorizontalLineColor , borderTopStyle:'solid' , marginBottom:20 , marginTop:32}}/>
                            </div>}
                            {itemIndexDefault >= 0 && <div>
                            <div key={index} style={{display:'flex' , justifyContent:'space-between'}}>
                                <div className="CartDetailsContent">
                                <p style={{fontSize:30 , fontWeight:"600" , lineHeight:"27px" , color:COLORS.PrimaryColor , marginTop:16}}>{item.brand}</p>
                                <p style={{fontSize:30 , fontWeight:"400" , lineHeight:"27px" , color:COLORS.PrimaryColor}}>{item.name}</p>
                                <DisplayCartCurrency prices={item.prices} quantity={item.quantity}/>
                                {itemIndexDefault >=0 && <DisplayAttributes customeFeatureOfItem={CustomeCartAttributes[itemIndexDefault]} attributes={item.attributes}/>}
                                </div>
                                <div style={{display:'flex' , alignItems:'center'}}>
                                {
                                    itemIndexDefault >= 0 && <div className="CartItemQuantity" style={{marginRight : 24}}>
                                    <button onClick={()=>{AddToCart(item); CustomAddToCartFun(CustomeCartAttributes[itemIndexDefault])}} className="CartItemButtonStyle">+</button>
                                    <p style={{textAlign:'center' , color:COLORS.PrimaryColor , fontSize : 24 , fontWeight:'500' , lineHeight:"38px"}}>{CustomeCartAttributes[itemIndexDefault].quantity}</p>
                                    <button onClick={()=>UpdateCartItemNumberDecrement(CustomeCartAttributes[itemIndexDefault])} className="CartItemButtonStyle">-</button>
                                </div>
                                }
                                <div className="CartItemImage" style={{position:'relative'}}>
                                {
                                    item.gallery.length <= 1 ?
                                    <img src={item.gallery[0]} alt={item.brand} style={{width:200}}/>:
                                    <ImageSlider gallery={item.gallery}/>
                                }
                                </div>
                                </div>
                            </div>
                            <hr style={{borderTopWidth:1 , borderTopColor:COLORS.HorizontalLineColor , borderTopStyle:'solid' , marginBottom:20 , marginTop:32}}/>
                            </div>}
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
        CartWithCustomeFeatures : state.cart.CustomeFeatureCartItems
    }
}
export default connect(mapStateToProp , 
    {AddToCart , UpdateCartItemNumberDecrement ,
        CustomeFeatureAddToCartFun , CustomAddToCartFun})(CartItem)