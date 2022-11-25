import React from "react";
import CategoryName from "../../../Components/CategoryName/CategoryName";
import ProductItem from "../../../Components/ProductItem/ProductItem";


export default class TechScreen extends React.Component{
    render(){
        return(
            <>
                <CategoryName categoryName={"Tech"}/>
                <ProductItem categorytype={"tech"}/>
            </>
        )
    }
}