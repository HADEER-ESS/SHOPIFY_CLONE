import React from "react";
import { connect } from "react-redux";
import COLORS from "../../Constants";


class DisplayCartCurrency extends React.Component{

    render(){
        const { ApplicationCurrency , ApplicationSymbol , prices , quantity , from} = this.props
        return (
            <div>
                {
                    prices.map((element , index) => {
                        if(element.currency.label === ApplicationCurrency){
                            return(
                                <p key={index} style={from ? {fontSize:16 , fontWeight:"600" , lineHeight:"25px" , color:COLORS.PrimaryColor} : {fontSize:24 , fontWeight:"700" , lineHeight:"24px" , color:COLORS.PrimaryColor}}>{element.amount / quantity} {ApplicationSymbol}</p>
                            )
                        }
                        return null
                    })
                }
            </div>
        )
    }
}
const mapStateToProp = state => {
    return{
        ApplicationCurrency : state.currency.currency ,
        ApplicationSymbol : state.currency.symbol
    }
}
export default connect (mapStateToProp)(DisplayCartCurrency)