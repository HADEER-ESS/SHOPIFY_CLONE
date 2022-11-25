import React from "react";
import COLORS from "../../Constants";

export default class TotalSalary extends React.Component {
  render() {
    let totalSalary = 0;
    const { cartData, totalQuantity, currentCurrency, symbol } = this.props;
    const calculateTotalPrice = () => {
      cartData.forEach((element) => {
        element.prices.forEach((item) => {
          if (item.currency.label === currentCurrency) {
            totalSalary += item.amount;
          }
        });
      });
      return totalSalary;
    };
    const totalMoney = calculateTotalPrice();
    return (
      <>
        {totalQuantity !== null ? (
          <div>
            <div style={{display : "flex"}}>
            <p
              style={{
                color: COLORS.PrimaryColor,
                fontSize: 24,
                lineHeight: "24px",
                fontWeight: "400",
              }}
            >
              Tax 21%: &nbsp;
            </p>
            <p
            style={{
                color: COLORS.PrimaryColor,
                fontSize: 24,
                lineHeight: "28px",
                fontWeight: "700",
              }}
            >{symbol}{parseFloat((totalMoney * 21) / 100).toFixed(2)}</p>
            </div>
            <div style={{display:"flex"}}>
            <p
              style={{
                color: COLORS.PrimaryColor,
                fontSize: 24,
                lineHeight: "24px",
                fontWeight: "400",
              }}
            >
              Quantity: 
            </p>
            <p style={{
                color: COLORS.PrimaryColor,
                fontSize: 24,
                lineHeight: "28px",
                fontWeight: "700",
              }}>{totalQuantity}</p>
            </div>
            <div style={{display:"flex"}}>
            <p
              style={{
                color: COLORS.PrimaryColor,
                fontSize: 24,
                lineHeight: "24px",
                fontWeight: "500",
              }}
            >
              Total: &nbsp;
            </p>
            <p style={{
                color: COLORS.PrimaryColor,
                fontSize: 24,
                lineHeight: "28px",
                fontWeight: "700",
              }}>{symbol}{parseFloat(totalMoney).toFixed(2)}</p>
            </div>
          </div>
        ) : (
          <div style={{display:"flex" , justifyContent:"space-between"}}>
          <p
            style={{
              color: COLORS.PrimaryColor,
              fontSize: 16,
              lineHeight: "18px",
              fontWeight: "700",
            }}
          >
            Total: 
          </p>
          <p
            style={{
              color: COLORS.PrimaryColor,
              fontSize: 16,
              lineHeight: "18px",
              fontWeight: "700",
            }}>
          {symbol} {parseFloat(totalMoney).toFixed(2)}
          </p>
          </div>
        )}
      </>
    );
  }
}
