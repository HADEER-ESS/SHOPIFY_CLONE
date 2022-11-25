import React from "react";
import { gql } from "@apollo/client";
import { Query } from '@apollo/client/react/components';
import { BsCart2 } from "react-icons/bs";
import COLORS from "../../Constants";
import { connect } from "react-redux";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import { AddToCart, CustomAddToCartFun } from "../../redux/Features/CartSlicer";
import DisplayCurrency from "../DisplayCurrency/DisplayCurrency";




const GET_PRODUCT_DATA = gql`
  query Query {
    category {
      products {
        id
        name
        inStock
        gallery
        category
        brand
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        attributes {
          id
          type
          items {
            value
          }
        }
      }
    }
  }
`;

class ProductItem extends React.Component {
  
  render() {
    const { currentCurrency, categorytype, AddToCart, CustomAddToCartFun } = this.props;
    const AddToCartFun = (data , value) => {
      const attributes = [];
      data.filter((item) => {
        if (item.id === value) {
          item.attributes.map((element) => {
            return attributes.push({
              type: element.id,
              value: element.items[0].value,
            });
          });
          const CustomeCart = {
            brand: item.id,
            features: attributes,
            quantity: 1,
          };
          AddToCart(item);
          CustomAddToCartFun(CustomeCart);
        }
        return null;
      });
    };
    return (
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className="ProductsItemList">
        <Query query={GET_PRODUCT_DATA}>
        {({loading, error, data}) => {
          if(loading) return <p>Loading..... </p>
          if(error) return <p>Error :/</p>
          return data.category.products.map(({id, name, prices, gallery, category, inStock, brand , attributes})=> 
          !categorytype ? (
              <div
                key={id}
                style={
                  inStock
                    ? {
                        height: 490,
                        marginBottom: 103,
                        padding: 16,
                        marginRight: 42,
                        justifyContent: "center",
                      }
                    : { pointerEvents: "none", opacity: 0.7 }
                }
                className="productItem_Hovered"
              >
                {!inStock && (
                  <span
                    className="OutOfStockIetm"
                    style={{
                      color: COLORS.OutProductTextColor,
                      fontSize: 24,
                      lineHeight: "160%",
                      fontWeight: "400",
                    }}
                  >
                    OUT OF STOCK
                  </span>
                )}
                <Link to={`/details/${id}`}>
                  <img
                    className={"productImage"}
                    alt={id}
                    src={gallery[0]}
                    style={{
                      width: 350,
                      height: 333,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Link>
                <div
                  className="ImageCartItem"
                  style={{ backgroundColor: COLORS.ActiveText }}
                  onClick={() => AddToCartFun(data.category.products , id)}
                >
                  <BsCart2 color={COLORS.WhiteColor} size={25} />
                </div>
                <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: "300",
                      lineHeight: "180%",
                      textAlign: "left",
                      color: inStock
                        ? COLORS.PrimaryColor
                        : COLORS.OutProductTextColor,
                    }}
                  >
                    {name} - {brand}
                  </h3>
                  <div style={{display:"flex"}}>
                    {
                      attributes.map((element , index) => (
                        element?.type === "swatch" 
                        ? element.items.map((value, index) => {
                        return (
                          <div
                            key={index}
                            className="attributeContainerItem"
                            style={{
                                    width: 36,
                                    height: 36,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 12,
                                    borderColor: "transparent",
                                  }
                            }
                          >
                            <div
                              style={{
                                      backgroundColor: `${value.value}`,
                                      width: 32,
                                      height: 32,
                                      borderColor : value.value==="#FFFFFF" ? "#000" : "transparent" ,
                                      borderWidth:1,
                                      borderStyle:"solid"
                                    }
                                    }
                            ></div>
                          </div>
                        );
                      }): null
                      ))
                    }
                  </div>
                  
                  <DisplayCurrency
                    inStock={inStock}
                    prices={prices}
                    currentCurrency={currentCurrency}
                  />
                </Link>
              </div>
            ) : (
              categorytype === category && (
                <div
                  to={`/details/${id}`}
                  key={id}
                  style={
                    inStock
                      ? {
                          height: 444,
                          marginBottom: 103,
                          padding: 16,
                          marginRight: 23,
                          justifyContent: "center",
                        }
                      : { pointerEvents: "none", opacity: 0.7 }
                  }
                  className="productItem_Hovered"
                >
                  {!inStock && (
                    <span
                      className="OutOfStockIetm"
                      style={{
                        color: COLORS.OutProductTextColor,
                        fontSize: 24,
                        lineHeight: "160%",
                        fontWeight: "400",
                      }}
                    >
                      OUT OF STOCK
                    </span>
                  )}
                  <Link to={`/details/${id}`}>
                    <img
                      className="productImage"
                      alt={id}
                      src={gallery[0]}
                      style={{
                        width: 350,
                        height: 333,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </Link>
                  <div
                    className="ImageCartItem"
                    style={{ backgroundColor: COLORS.ActiveText }}
                    onClick={() => AddToCartFun(data.category.products , id)}
                  >
                    <BsCart2 color={COLORS.WhiteColor} size={25} />
                  </div>
                  <Link
                    to={`/details/${id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: "300",
                        lineHeight: "180%",
                        textAlign: "left",
                        color: inStock
                          ? COLORS.PrimaryColor
                          : COLORS.OutProductTextColor,
                      }}
                    >
                      {name}
                    </h3>
                    <DisplayCurrency
                      inStock={inStock}
                      prices={prices}
                      currentCurrency={currentCurrency}
                    />
                  </Link>
                </div>
              )
            )
          )
        }}
      </Query>
      </div>
      
    );
  }
}
const mapStateToProp = (state) => {
  return {
    currentCurrency: state.currency.currency,
  };
};
export default connect(mapStateToProp, { AddToCart, CustomAddToCartFun })(
  ProductItem
)
