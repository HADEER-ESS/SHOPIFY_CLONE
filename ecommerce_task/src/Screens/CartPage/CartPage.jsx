import React from "react";
import { connect } from "react-redux";
import CartItem from "../../Components/CartItem/CartItem";
import TotalSalary from "../../Components/DisplayTotalSalary/TotalSalary";
import { RemoveAllFromCart } from "../../redux/Features/CartSlicer";
import COLORS from "../../Constants";


class CartPage extends React.Component{
    state = {
        cartReduxData : [] ,
        ApplicationCurrency : null,
        ApplicationCurrencySymbol : null ,
        totalQuantity : 0,
    }

    render(){
        const {CartItems , TotalQuantity , CartCurrency , CartCurrencySymbol , RemoveAllFromCart} = this.props
        return(
            <>
                <p style={{color:COLORS.PrimaryColor , fontSize:32 , fontWeight:'700' , lineHeight:'40px' , marginTop:55 , marginBottom:23}}>CART</p>
                <hr style={{borderTopWidth:1 , borderTopColor:COLORS.HorizontalLineColor , borderTopStyle:'solid' , marginTop : 32 }}/>
                <CartItem from={"screen"}/>
                <TotalSalary symbol={CartCurrencySymbol} cartData={CartItems} totalQuantity={TotalQuantity} currentCurrency={CartCurrency}/>
                <button onClick={()=>RemoveAllFromCart()} style={{fontSize:14 , lineHeight:"17px" , fontWeight:"600" , color:COLORS.WhiteColor , backgroundColor:COLORS.ActiveText , borderColor:"transparent" , width:279 , height:43 , marginBottom:20}}>ORDER</button>
            </>
        )
    }
}
const mapStateToProp = state => {
    return{
        CartItems : state.cart.cartItems,
        TotalQuantity : state.cart.countQuantity,
        CartCurrency : state.currency.currency ,
        CartCurrencySymbol : state.currency.symbol
    }
}
export default connect(mapStateToProp , {RemoveAllFromCart})(CartPage)