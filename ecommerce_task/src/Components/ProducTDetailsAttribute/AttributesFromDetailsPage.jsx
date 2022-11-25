import React from "react";
import { connect } from "react-redux";
import COLORS from "../../Constants";
import DisplayCurrency from "../DisplayCurrency/DisplayCurrency";
import {CustomeFeatureAddToCartFun , AddToCart} from "../../redux/Features/CartSlicer";

class DisplayAttributeItem extends React.Component{
  state = {
    activeAttributeValue : null,
  }
  render(){
    const {index , value} = this.props
    return(
      <div 
      onClick={()=>this.setState({activeAttributeValue : index})}
      style={{display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 63,
      height: 45 ,
      backgroundColor : index === this.state.activeAttributeValue? COLORS.PrimaryColor : COLORS.WhiteColor}}>
        <span
        style={
          {
                fontSize: 16,
                lineHeight: "18px",
                fontWeight: "400",
                textAlign: "center",
                color:index === this.state.activeAttributeValue ? COLORS.WhiteColor : COLORS.PrimaryColor,
              }
        }
      >
        {value.value}
      </span>
      </div>
    )
  }
}
class DetailsPageAttribute extends React.Component{
  state = {
    activeColorAttributeValue : null,
    activeAttributeValue : null,
    featuresArray : [],
    sendedFeatures :{},
  }
    render(){
        const { id, attributes , prices , currentCurrency ,product  , AddToCart , CustomeFeatureAddToCartFun} = this.props ; 
        const createCustome = this.state.featuresArray
        //function
        const createCustomeElementAttributes = (type , value) => {
          const itemIndex = createCustome.findIndex((item) =>
            item.type === type
          )
          if(itemIndex >= 0){
            createCustome[itemIndex].value = value
            this.setState({featuresArray : createCustome})
          }else{
            createCustome.push({type:type , value:value})
            this.setState({featuresArray : createCustome})
          }
          this.setState({sendedFeatures : {brand : id , features : this.state.featuresArray , customeFeatures : true , quantity : 1}})
        }
        //function
        const handleButton = (product) => {
          if(product.attributes.length === 0){
            console.log("no attributes :/")
            const emptyFeatures = {brand : product.id , features :product.attributes , customeFeatures : true , quantity:1}
            CustomeFeatureAddToCartFun(emptyFeatures)
            AddToCart(product)
          }
          else{
            console.log("not empty :)")
            CustomeFeatureAddToCartFun(this.state.sendedFeatures)
            AddToCart(product)
          }
        }
        return(
            <>
          {attributes.length > 0 &&
          attributes.map((element, index) => 
              <div key={index}>
                <p
                  style={{
                          fontSize: 27,
                          lineHeight: "18px",
                          color: COLORS.PrimaryColor,
                          fontWeight: "700",
                          fontVariant: "all-small-caps",
                          marginTop: 43,
                        }
                  }
                >
                  {element.id}:
                </p>
                <div style={{ display: "flex" }}> {/*//group*/}
                  {element?.type === "swatch"
                    ? element.items.map((value, index) => {
                        return (
                          <div
                            key={index}
                            className="attributeContainerItem"
                            onClick={()=>createCustomeElementAttributes(element.id , value.value)}
                            style={{
                                    width: 36,
                                    height: 36,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 12,
                                    borderColor: index === this.state.activeColorAttributeValue ? COLORS.ActiveText : "transparent"
                                  }
                            }
                          >
                            <div
                              onClick={()=>this.setState({activeColorAttributeValue : index})}
                              style={
                                {
                                      backgroundColor: `${value.value}`,
                                      width: 32,
                                      height: 32,
                                      borderColor : value.value==="#FFFFFF" ? "#000" : "transparent" ,
                                      borderWidth: 1,
                                      borderStyle:"solid"
                                    }
                              }
                            ></div>
                          </div>
                        );
                      })
                    : element.items.map((value, index) => {
                        return (
                          <div
                            onClick={()=>createCustomeElementAttributes(element.id , value.value)}
                            key={element.id+index}
                            className="attributeContainerItem"
                            style={{width: 63,height: 45,marginRight: 12,}}>
                            <DisplayAttributeItem index={index} value={value}/>
                          </div>
                        );
                      })}
                </div>
              </div>
            
          )}
          <p
                  style={{
                    fontSize: 18,
                    lineHeight: "18px",
                    fontWeight: "700",
                    color: COLORS.PrimaryColor,
                    marginTop: 38,
                  }}
                >
                  PRICE:
                </p>
                <DisplayCurrency prices={prices} currentCurrency={currentCurrency} from={"details"}/>
                <button className="addToCartButton" onClick={()=>handleButton(product)}>ADD TO CART</button>
      </>
        )
    }
}
const mapStateToProp = state => {
  return{
    currentCurrency : state.currency.currency,
  }
}
export default connect(mapStateToProp , {CustomeFeatureAddToCartFun , AddToCart})(DetailsPageAttribute)