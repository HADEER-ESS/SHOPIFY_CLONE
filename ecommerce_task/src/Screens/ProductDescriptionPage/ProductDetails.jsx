import React from "react";
import COLORS from "../../Constants";
import { gql } from "@apollo/client";
import { Query } from '@apollo/client/react/components';
import "./ProductDetails.css";
import DetailsPageAttribute from "../../Components/ProducTDetailsAttribute/AttributesFromDetailsPage";


const GET_PRODUCTS_LIST = gql`
query Query {
  category {
    products {
      id
      name
      gallery
      description
      brand
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
    }
  }
}
`;

export default class ProductDetails extends React.Component {
  render() {
    const getProductPath = window.location.pathname.split("/");
    const getProductId = getProductPath[getProductPath.length - 1];
    return(
      <Query query={GET_PRODUCTS_LIST}>
        {({loading , error , data}) => {
          if(loading) return <p>Loading... </p>
          if(error) return <p>Error :/</p>
          return data.category.products.map(
        (item) =>
          getProductId === item.id && (
            <div key={item.id} style={{ display: "flex" }}>
              <div
                className="productItemCalleryList"
                style={{ marginRight: 25 }}
              >
                {item.gallery.map((element, index) => {
                  return (
                    <div key={index} style={{ marginBottom: 30 }}>
                      <img
                        src={element}
                        alt={item.id}
                        style={{ width: 80, height: 80 }}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className="productItemGallaryPart"
                style={{ marginRight: 100, marginTop: 10 }}
              >
                <img
                  src={item.gallery[0]}
                  alt={item.id}
                  style={{ width: 610, height: 511 }}
                />
              </div>
              <div className="productItemDetailsPart">
                <p
                  style={{
                    fontSize: 30,
                    lineHeight: "27px",
                    color: COLORS.PrimaryColor,
                    fontWeight: "600",
                    margin: 0,
                    marginTop: 10,
                  }}
                >
                  {item.brand}
                </p>
                <p
                  style={{
                    fontSize: 30,
                    lineHeight: "27px",
                    color: COLORS.PrimaryColor,
                    fontWeight: "400",
                    marginTop: 16,
                  }}
                >
                  {item.name}
                </p>
                  <DetailsPageAttribute product={item} attributes={item.attributes} id={item.id} prices={item.prices}/>
                <div
                  className="productContent"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            </div>
          )
      )
        }}
      </Query>
    );
  }
}
