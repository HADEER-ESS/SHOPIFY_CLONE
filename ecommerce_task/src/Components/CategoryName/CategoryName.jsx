import React from "react";
import COLORS from "../../Constants/index"
export default class CategoryName extends React.Component{
    render(){
        return(
            <h1 style={{fontSize:42 , fontWeight:"400" , lineHeight:"180%", color:COLORS.PrimaryColor}}>{this.props.categoryName}</h1>
        )
    }
}