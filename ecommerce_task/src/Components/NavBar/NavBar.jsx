import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import AppLogo from "../../Assetes/Images/Group.png";
import { BiDollar } from "react-icons/bi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { gql } from "@apollo/client";
import { Query } from '@apollo/client/react/components';
import { connect } from "react-redux";
import COLORS from "../../Constants";
import { UpdateCurrency } from "../../redux/Features/CurrencySlicer";
import CartPopUp from "../PopUpCart/CartPopUp";

const GET_CURRENY_DATA = gql`
  query Query {
    currencies {
      label
      symbol
    }
  }
`;

class NavBar extends React.Component {
  state = {
    openDropDown: false,
    activeItemBar: 0,
    openCartDropDown: false,
  };

  render() {
    const { UpdateCurrency , TotalQuantity} = this.props;
    const handleCartIcon = () => {
      this.setState({ openCartDropDown: !this.state.openCartDropDown });
    };
    const navContent = [
      { path: "/", cat: "ALL" },
      { path: "/clothes", cat: "CLOTHES" },
      { path: "/tech", cat: "TECH" },
    ];
    const SwitchTaps = (id) => {
      this.setState({ activeItemBar: id });
    };
    return (
      <div className="NavBarWrapper">
        <div className="NavBarContainer" style={{ alignItems: "center" }}>
          <ul
            className="NavBarListItem"
            style={{ listStyle: "none", display: "flex", padding: 0 }}
          >
            {navContent.map((elem, index) => {
              return (
                <li key={index} onClick={() => SwitchTaps(index)}>
                  <Link
                    to={elem.path}
                    className={
                      index === this.state.activeItemBar
                        ? "activeItem"
                        : "nonActiveItem"
                    }
                  >
                    {elem.cat}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="NavBarImage">
            <img
              src={AppLogo}
              alt="application logo"
              style={{ width: 28, paddingTop: 3 }}
            />
          </div>
          <div
            className="NavBarSalCart"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ paddingRight: 22, position: "relative" }}
              onClick={() =>
                this.setState({ openDropDown: !this.state.openDropDown })
              }
            >
              <BiDollar size={20} />
              {this.state.openDropDown ? (
                <IoIosArrowUp size={13} />
              ) : (
                <IoIosArrowDown size={13} />
              )}
              {this.state.openDropDown && 
              <div className="dorpDownItems">
                <Query query={GET_CURRENY_DATA}>
                  {({loading , error , data}) =>{
                    if(loading) return <p>Loading... </p>
                    if(error) return <p>Error :/</p>
                    return  data.currencies?.map((elem, index) => (
                    <p
                    key={index}
                    style={{ color: COLORS.PrimaryColor }}
                    onClick={() =>
                      UpdateCurrency({ label: elem.label, symbol: elem.symbol })
                    }
                  >
                    {elem.symbol} {elem.label}
                  </p>
                ))
                
                  }}
                </Query>
              </div>}
            </div>
            <div style={{ position: "relative" }}>
              <BsCart2 size={20} onClick={() => handleCartIcon()}/>
              <div className={TotalQuantity>0 ? "ShowCartQuantity" : "HideCartQuantity"}>{TotalQuantity}</div>
              {this.state.openCartDropDown && (
                <CartPopUp
                  onClick={() =>
                    this.setState({
                      openCartDropDown: !this.state.openCartDropDown,
                    })
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    TotalQuantity : state.cart.countQuantity
  }
}
export default connect(mapStateToProps, { UpdateCurrency })(NavBar);
