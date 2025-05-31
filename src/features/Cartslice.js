import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cart : []
}

export const Cartslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    AddtoCart: (state , actions)=>{
        state.cart.push(actions.payload)
    }
  },
})

export const { AddtoCart } = Cartslice.actions

export default Cartslice.reducer