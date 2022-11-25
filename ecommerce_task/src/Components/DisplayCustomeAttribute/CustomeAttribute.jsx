import React from "react";
import COLORS from "../../Constants";

export default class CustomeAttribute extends React.Component{
    render(){
        const {attributes , popup , customeFeatureOfItem} = this.props ; 
        return(
            <>
                {
                    attributes.length > 0 &&
                    attributes.map(({id , items , type} , index) =>
                        <div key={index}>
                        <p
                        style={
                            popup
                                ? {
                                fontSize: 14,
                                lineHeight: "16px",
                                color: COLORS.PrimaryColor,
                                fontWeight: "400",
                                marginTop: 8,
                                }
                            : {
                                fontSize: 27,
                                lineHeight: "18px",
                                color: COLORS.PrimaryColor,
                                fontWeight: "700",
                                fontVariant: "all-small-caps",
                                marginTop: 43,
                                }
                            }>
                        {id}:
                        </p>
                        <div style={{display:'flex'}}>
                        {
                            type === "swatch" ? 
                            <div style={{display:"flex"}}>
                            {items.map(({value}) => {
                                const itemIndex = customeFeatureOfItem.features.findIndex((item)=>item.type === id && item.value === value)
                                return(
                                    itemIndex >=0 ?
                                    <div 
                                key={value}
                                style={
                                    popup
                                ? {
                                    width: 20,
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 8,
                                    borderColor: COLORS.ActiveText,
                                    borderWidth: 1,
                                    borderStyle:"solid",
                                    padding : 0.5
                                  }
                                : {
                                    width: 36,
                                    height: 36,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 12,
                                    borderColor:  COLORS.ActiveText,
                                    borderWidth:1,
                                    borderStyle : "solid",
                                    padding: 0.5
                                  }
                            }
                                >
                                <div
                              style={
                                popup
                                  ? {
                                      backgroundColor: `${value}`,
                                      width: 16,
                                      height: 16,
                                      borderColor : value==="#FFFFFF" ? "#000" : "transparent" ,
                                      borderWidth: 1,
                                      borderStyle:"solid"
                                    }
                                  : {
                                      backgroundColor: `${value}`,
                                      width: 32,
                                      height: 32,
                                      borderColor : value==="#FFFFFF" ? "#000" : "transparent" ,
                                      borderWidth:1,
                                      borderStyle:"solid"
                                    }
                                    }
                            ></div>
                            </div>:
                            <div 
                                key={value}
                                style={
                                    popup
                                ? {
                                    width: 20,
                                    height: 20,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 8,
                                    borderColor: "transparent"
                                  }
                                : {
                                    width: 36,
                                    height: 36,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 12,
                                    borderColor:  "transparent"
                                  }
                            }
                                >
                                <div
                              style={
                                popup
                                  ? {
                                      backgroundColor: `${value}`,
                                      width: 16,
                                      height: 16,
                                      borderColor : value==="#FFFFFF" ? "#000" : "transparent" ,
                                      borderWidth: 1,
                                      borderStyle:"solid"
                                    }
                                  : {
                                      backgroundColor: `${value}`,
                                      width: 32,
                                      height: 32,
                                      borderColor : value==="#FFFFFF" ? "#000" : "transparent" ,
                                      borderWidth:1,
                                      borderStyle:"solid"
                                    }
                                    }
                            ></div>
                            </div>
                                )
                            }
                            )}
                            </div> :
                            <div style={{display:"flex"}}>
                            {items.map(({value}) => {
                                const itemIndex = customeFeatureOfItem.features.findIndex((item)=>item.type === id && item.value === value)
                                return(
                                    itemIndex >=0 ?
                                    <div 
                                key={value}
                                style={
                              popup
                                ? {
                                    width: 24,
                                    height: 24,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: COLORS.PrimaryColor ,
                                    marginRight: 8,
                                    borderColor:COLORS.PrimaryColor,
                                    borderWidth:1,
                                    borderStyle:"solid"
                                  }
                                : {
                                    width: 63,
                                    height: 45,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor : COLORS.PrimaryColor ,
                                    marginRight: 12,
                                    borderColor:COLORS.PrimaryColor,
                                    borderWidth:1,
                                    borderStyle:"solid"
                                  }
                            }
                                >
                                <span
                                    style={
                                popup
                                  ? {
                                      fontSize: 12,
                                      lineHeight: "22px",
                                      fontWeight: "400",
                                      textAlign: "center",
                                      color: COLORS.WhiteColor ,
                                    }
                                  : {
                                      fontSize: 16,
                                      lineHeight: "18px",
                                      fontWeight: "400",
                                      textAlign: "center",
                                      color: COLORS.WhiteColor ,
                                    }
                              }
                                    >{value}</span>
                            </div>:
                            <div 
                                key={value}
                                style={
                              popup
                                ? {
                                    width: 24,
                                    height: 24,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor:  COLORS.WhiteColor,
                                    marginRight: 8,
                                    borderColor:COLORS.PrimaryColor,
                                    borderWidth:1,
                                    borderStyle:"solid"
                                  }
                                : {
                                    width: 63,
                                    height: 45,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor :  COLORS.WhiteColor,
                                    marginRight: 12,
                                    borderColor:COLORS.PrimaryColor,
                                    borderWidth:1,
                                    borderStyle:"solid"
                                  }
                            }
                                >
                                <span
                                    style={
                                popup
                                  ? {
                                      fontSize: 12,
                                      lineHeight: "22px",
                                      fontWeight: "400",
                                      textAlign: "center",
                                      color: COLORS.PrimaryColor,
                                    }
                                  : {
                                      fontSize: 16,
                                      lineHeight: "18px",
                                      fontWeight: "400",
                                      textAlign: "center",
                                      color: COLORS.PrimaryColor,
                                    }
                              }
                                    >{value}</span>
                            </div>
                                )
                            }
                            )}
                            </div>
                        }
                        </div>
                    </div>
                    )
                }
            </>
        )
    }
}
/*
customeFeatureOfItem.features.map((attr) => 
                                <div 
                                key={value}
                                style={
                              popup
                                ? {
                                    width: 24,
                                    height: 24,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: attr.type===id && attr.value ===value ?COLORS.PrimaryColor : COLORS.WhiteColor,
                                    marginRight: 8,
                                    borderColor:COLORS.PrimaryColor,
                                    borderWidth:1,
                                    borderStyle:"solid"
                                  }
                                : {
                                    width: 63,
                                    height: 45,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor : attr.type===id && attr.value ===value ?COLORS.PrimaryColor : COLORS.WhiteColor,
                                    marginRight: 12,
                                    borderColor:COLORS.PrimaryColor,
                                    borderWidth:1,
                                    borderStyle:"solid"
                                  }
                            }
                                >
                                <span
                                    style={
                                popup
                                  ? {
                                      fontSize: 12,
                                      lineHeight: "22px",
                                      fontWeight: "400",
                                      textAlign: "center",
                                      color: attr.type===id && attr.value ===value ?COLORS.WhiteColor : COLORS.PrimaryColor,
                                    }
                                  : {
                                      fontSize: 16,
                                      lineHeight: "18px",
                                      fontWeight: "400",
                                      textAlign: "center",
                                      color: attr.type===id && attr.value ===value ?COLORS.WhiteColor : COLORS.PrimaryColor,
                                    }
                              }
                                    >{value}</span>
                            </div>
                                )
*/