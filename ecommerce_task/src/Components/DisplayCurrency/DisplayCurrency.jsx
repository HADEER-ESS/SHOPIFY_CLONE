import React from "react";
import COLORS from "../../Constants";

export default class DisplayCurrency extends React.Component{
    render(){
        return(
            <>
                {
                this.props.prices.map((element , index)=>{
                  if(element.currency.label === this.props.currentCurrency){
                    return(
                    <p key={index} style={{fontSize:18 , fontWeight:"500" , lineHeight :"160%" , textAlign:"left" , color: this.props.from === "details" ? COLORS.PrimaryColor : this.props.inStock? COLORS.PrimaryColor:COLORS.OutProductTextColor}}>{element.currency.symbol} {element.amount}</p>
                  )
                  }
                  return null
                })
              }
            </>
        )
    }
}