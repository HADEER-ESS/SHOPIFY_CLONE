import React from "react";
import { connect } from "react-redux";
import COLORS from "../../Constants";
import { RemoveAllFromCart } from "../../redux/Features/CartSlicer";
import "./CartPopUp.css";
import { Link } from "react-router-dom";
import DisplayPopUpCartItems from "../PopUpCartItems/PopUpCartItems";
import TotalSalary from "../DisplayTotalSalary/TotalSalary";

class CartPopUp extends React.Component {
  render() {
    const {CartReduxData , RemoveAllFromCart , CartCurrency , CartCurrencySymbol} = this.props
    return (
      <div className="CartPopUpStyle">
        <DisplayPopUpCartItems/>
        <TotalSalary cartData={CartReduxData} currentCurrency={CartCurrency} symbol={CartCurrencySymbol} totalQuantity={null}/>
        <div className="popupButtonGroup" onClick={this.props.onClick}>
          <Link to="/cart">
            <button
              style={{
                backgroundColor: COLORS.WhiteColor,
                color: COLORS.PrimaryColor,
                borderColor: COLORS.PrimaryColor,
                marginRight: 12,
              }}
            >
              VIEW BAG
            </button>
          </Link>
          <button
        style={{
          backgroundColor: COLORS.ActiveText,
          color: COLORS.WhiteColor,
          borderColor: "transparent",
        }}
        onClick={() => RemoveAllFromCart()}
      >
        CHECK OUT
      </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    CartReduxData : state.cart.cartItems,
    CartCurrency : state.currency.currency ,
    CartCurrencySymbol : state.currency.symbol
  }
}
export default connect(mapStateToProps , {RemoveAllFromCart})(CartPopUp)