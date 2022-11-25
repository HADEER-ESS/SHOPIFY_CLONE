import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency : "USD" ,
    symbol : "$"
}

export const CurrencySlicer = createSlice({
    name : "currency",
    initialState,
    reducers : {
        UpdateCurrency : (state , action)=>{
            console.log('action.payload.... ' , action.payload)
            state.currency = action.payload.label
            state.symbol = action.payload.symbol
            console.log("currency state " ,state.currency)
        }

    }
})

export const {UpdateCurrency} = CurrencySlicer.actions
export default CurrencySlicer.reducer 